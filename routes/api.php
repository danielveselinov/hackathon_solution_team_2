<?php

use App\Http\Controllers\Api\BlogsController;
use App\Http\Controllers\Api\CareersController;
use App\Http\Controllers\Api\MissionsController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ServicesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/news', [NewsController::class, 'index']);
Route::get('/blogs', [BlogsController::class, 'index']);
Route::get('/missions', [MissionsController::class, 'index']);
Route::get('/careers', [CareersController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
