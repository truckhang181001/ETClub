<?php

use App\Http\Controllers\User\HomePageController;
use App\Http\Controllers\User\InfoContestPageController;
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
Route::get('/thong-tin-cuoc-thi',[InfoContestPageController::class,'index']);

