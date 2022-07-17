<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\BlogsController;
use App\Http\Controllers\Api\CareersController;
use App\Http\Controllers\Api\MissionsController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\ContactBusinessController;
use App\Http\Controllers\Api\BannerImagesController;
use App\Http\Controllers\Api\ContactBusinessController as ApiContactBusinessController;
use App\Http\Controllers\Api\ContactCareersController;
use App\Http\Controllers\Api\ContactPeronalsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/news', [NewsController::class, 'index']);
Route::get('/blogs', [BlogsController::class, 'index']);
Route::get('/missions', [MissionsController::class, 'index']);
Route::get('/careers', [CareersController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/banner', [BannerImagesController::class, 'index']);

Route::post('/contact/careers', [ContactCareersController::class, 'store']);
Route::post('/contact/business', [ApiContactBusinessController::class, 'store']);
Route::post('/contact/personal', [ContactPeronalsController::class, 'store']);