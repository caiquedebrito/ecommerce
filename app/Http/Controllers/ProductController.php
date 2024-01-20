<?php

namespace App\Http\Controllers;

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
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'required|string|max:255',
            'category' => 'required|string|max:255',
        ]);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'category' => $request->category,
        ]);

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
            'category' => 'required|string|max:255',
        ]);

        $product->update($validated);

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
