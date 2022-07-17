<?php

use App\Http\Controllers\BannerImagesController;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\ContactBusinessController;
use App\Http\Controllers\ContactCareersController;
use App\Http\Controllers\MissionsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;

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
    return view('welcome');
})->name('welcome');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

Route::middleware('auth')->group(function() {
    Route::resource('/blogs', BlogsController::class)->except('show');
    Route::resource('/missions', MissionsController::class)->except('show');
    Route::resource('/contact/careers', ContactCareersController::class)->only(['index', 'show']);
    Route::resource('/contact/businesses', ContactBusinessController::class)->only(['index', 'show']);
});

Route::get('/news', [NewsController::class, 'index'])->name('news.index')->middleware('auth');
Route::get('/careers', [CareersController::class, 'index'])->name('default.careers.index')->middleware('auth');
Route::get('/services', [ServicesController::class, 'index'])->name('services.index')->middleware('auth');
Route::get('/banner', [BannerImagesController::class, 'index'])->name('banner.index')->middleware('auth');