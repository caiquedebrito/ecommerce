<?php

use App\Http\Controllers\Admin\AdminPagesController;
use App\Http\Controllers\Admin\AdmiPagesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebController;
use App\Models\Category;
use App\Models\Product;
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

Route::get('/', [WebController::class, 'home'])->name('home');
Route::get('/sobre', [WebController::class, 'about'])->name('about');
Route::get('/contato', [WebController::class, 'contact'])->name('contact');

// Admin pages
Route::get('/admin/produtos', [AdminPagesController::class, 'products'])->middleware('admin.auth')->name('admin.products');
Route::get('/admin/produtos/criar', [AdminPagesController::class, 'createProduct'])->middleware('admin.auth')->name('admin.product.create');
Route::get('/admin/produtos/{id}', [AdminPagesController::class, 'product'])->middleware('admin.auth')->name('admin.product');

Route::post('/email', [MailController::class, 'send'])->name('email')->middleware('auth');

// Products Routes
Route::group(['prefix' => 'products', 'namespace' => 'Products'], function () {
    Route::get('/', [ProductController::class, 'index'])->name('products.index');
    Route::get('/home', [ProductController::class, 'home'])->name('products.home');
    Route::get('/search', [ProductController::class, 'search'])->name('products.search');
    Route::get('/serach-by-category', [ProductController::class, 'searchByCategory'])->name('products.searchByCategory');
    Route::get('/{product}', [ProductController::class, 'show'])->name('products.show');
    
    Route::middleware('admin.auth')->group(function () {
        Route::post('/store', [ProductController::class, 'store'])->name('products.store');
        Route::post('/{product}/update', [ProductController::class, 'update'])->name('products.update');
        Route::delete('/{product}/destroy', [ProductController::class, 'destroy'])->name('products.destroy');
    });
});

// Categories Routes
Route::group(['prefix' => 'categories', 'namespace' => 'Categories'], function () {
    Route::get('/', [CategoryController::class, 'index'])->name('categories.index');
    Route::get('/{category}', [CategoryController::class, 'show'])->name('categories.show');
    
    Route::middleware('admin.auth')->group(function () {
        Route::post('/store', [CategoryController::class, 'store'])->name('categories.store');
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
