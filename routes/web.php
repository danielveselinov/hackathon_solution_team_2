<?php

use App\Http\Controllers\BlogsController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\MissionsController;
use App\Http\Controllers\NewsController;
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

Route::get('/news', [NewsController::class, 'index'])->name('news.index')->middleware('auth');
Route::get('/blogs', [BlogsController::class, 'index'])->name('blogs.index')->middleware('auth');
Route::get('/missions', [MissionsController::class, 'index'])->name('missions.index')->middleware('auth');
Route::get('/careers', [CareersController::class, 'index'])->name('careers.index')->middleware('auth');