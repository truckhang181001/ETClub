<?php

use App\Http\Controllers\User\HomePageController;
use App\Http\Controllers\User\ETNewsController;
use App\Http\Controllers\User\ETNewsPageController;
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

Route::get('/',[HomePageController::class,'index']);
Route::get('/ban-tin-et',[ETNewsPageController::class,'index']);
