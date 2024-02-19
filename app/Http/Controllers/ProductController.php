<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $products = Product::all();

        return response()->json($products);
    }

    public function home() {
        $products = Product::with('categories')->get();

        $productsByCategory = $products->groupBy(function ($product) {
            return $product->categories->first()->name;
        });
    
        // Limit each group to 5 products
        foreach ($productsByCategory as $category => $products) {
            $productsByCategory[$category] = $products->take(5);
        }
    
        return response()->json($productsByCategory);
    }

    

    public function show(string $id) {
        $product = Product::where("id", $id)->first();

        return Inertia::render('Product', [
            "product" => $product
        ]);
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

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string|max:255',
            'categories' => 'required|array',
            'categories.*' => 'string|max:255|exists:categories,name',
            'thumbnail' => 'required|image'
        ]);
    
        $categoryNames = $request->categories;
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
        $product->delete();

        return redirect(route('admin.index'));
    }

    public function search(Request $request) {

        if ($request->has('q')) {
            $search = $request->input('q');

            $products = Product::where('name', 'like', "%$search%")->get();

            return Inertia::render('Search', [
                'products' => $products
            ]);
        } 

        if ($request->has('c')) {
            $category = $request->input('c');

            $products = Product::whereHas('categories', function($query) use ($category) {
                $query->where('name', $category);
            })->get();

            return Inertia::render('Search', [
                'products' => $products
            ]);
        }
        
    }

    public function searchByCategory(Request $request) {
        if ($request->has('q') && $request->has('c')) {
            $quantity = $request->input('q');
            $category = $request->input('c');

            $products = Product::whereHas('categories', function($query) use ($category) {
                $query->where('name', $category);
            })->where('quantity', '>=', $quantity)->get();

            return response()->json($products);
        }
    }
}
