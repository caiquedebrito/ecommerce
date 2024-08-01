<?php

namespace App\Http\Controllers\Admin;

use App\Dtos\ProductDTO;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPagesController extends Controller
{
    public function products() {
        $products = Product::all()->map(function (Product $p) {
            return ProductDTO::create($p);
        });

        return Inertia::render('Admin/Products/Index', [
            'products' => $products
        ]);
    }

    public function product(string $id) {
        $product = Product::where("id", $id)->first();
        $categories = $product->categories;
        return Inertia::render('Admin/Products/Product', [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    public function createProduct() {
        $categories = Category::all();
        return Inertia::render('Admin/Products/CreateProduct', [
            'categories' => $categories
        ]);
    }
}
