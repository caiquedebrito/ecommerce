<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/sobre', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contato', function () {
    return Inertia::render('Contact');
})->name('contact');

// Products Routes
Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::get('/search', [ProductController::class, 'search'])->name('products.search');
    Route::get('/{product}', [ProductController::class, 'show'])->name('products.show');

    
    Route::middleware('admin.auth')->group(function () {
        // Route::get('/create', [ProductController::class, 'create'])->name('products.create');
        Route::post('/store', [ProductController::class, 'store'])->name('products.store');
        // Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
        Route::patch('/{product}/update', [ProductController::class, 'update'])->name('products.update');
        Route::delete('/{product}/destroy', [ProductController::class, 'destroy'])->name('products.destroy');
    });
});

// Categories Routes
Route::group(['prefix' => 'categories', 'namespace' => 'Categories'], function () {
    Route::get('/', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/{category}', [CategoryController::class, 'show'])->name('categories.show');
    
    Route::middleware('admin.auth')->group(function () {
        // Route::get('/create', [CategoryController::class, 'create'])->name('categories.create');
        Route::post('/store', [CategoryController::class, 'store'])->name('categories.store');
        // Route::get('/{category}/edit', [CategoryController::class, 'edit'])->name('categories.edit');
        Route::patch('/{category}/update', [CategoryController::class, 'update'])->name('categories.update');
        Route::delete('/{category}/destroy', [CategoryController::class, 'destroy'])->name('categories.destroy');
    });
});

Route::get('/carrinho', function () {
    return Inertia::render('ShoppingCart');
})->name('carrinho');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
