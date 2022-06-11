<?php

use App\Http\Controllers\User\HomePageController;
use App\Http\Controllers\User\HrController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\PageAboutClbController;
use App\Http\Controllers\User\CompetitionCompilationPageController;




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
Route::get('/tong-hop-cuoc-thi',[CompetitionCompilationPageController::class,'index']);
Route::get('/nhan-su',[HrController::class,'index']);
