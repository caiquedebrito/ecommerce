<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string|max:255',
            'categories' => 'required|array',
            'categories.*' => 'string|max:255|exists:categories,name',
            'thumbnail' => 'required|image'
        ]);

        if ($request->hasFile('thumbnail')) {
          $imagePath = $request->file('thumbnail')->store('product', 'public');
          $validated['thumbnail'] = asset('storage/' . $imagePath);
        }

        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->thumbnail = $validated['thumbnail'];
        $product->save();

        $categoryNames = $request->categories;
        $categories = Category::whereIn('name', $categoryNames)->get();
        $categoryIds = $categories->pluck('id');
    
        $product->categories()->attach($categoryIds);

        redirect('/admin');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product): RedirectResponse
    {
        //
        // $this->authorize('update', $product);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string|max:255',
            'categories' => 'required|array',
            'categories.*' => 'string|max:255|exists:categories,name',
        ]);
    
        $product->update($validated);
    
        $categoryNames = $request->categories; // Este é um array de nomes de categoria
        $categories = Category::whereIn('name', $categoryNames)->get();
        $categoryIds = $categories->pluck('id');
    
        $product->categories()->sync($categoryIds);

        return redirect(route('admin.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): RedirectResponse
    {
        //
        // $this->authorize('delete', $product);

        $product->delete();

        return redirect(route('admin.index'));
    }
}
