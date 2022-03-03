<?php

use App\Http\Controllers\User\HomePageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\PageAboutClbController;



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

Route::get('/',[HomePageController::class,'index']);
Route::get('/ve-cau-lac-bo',[PageAboutClbController::class,'index']);
