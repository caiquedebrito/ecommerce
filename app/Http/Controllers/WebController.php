<?php

namespace App\Http\Controllers;

use App\Dtos\ProductDTO;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class WebController extends Controller
{
    public function home() {
        $products = Product::all()->map(function (Product $p) {
            return ProductDTO::create($p);
        });

        $categories = Category::all();

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function about() {
        $categories = Category::all();
        
        return Inertia::render('About', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'categories' => $categories
        ]);
    }

    public function contact() {
        $categories = Category::all();

        return Inertia::render('Contact',[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'categories' => $categories
        ]);
    }
}
