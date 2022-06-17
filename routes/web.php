<?php

use App\Http\Controllers\Admin\AdminCompetitionController;
use App\Http\Controllers\Admin\AdminDashBoardController;
use App\Http\Controllers\User\HomePageController;
use App\Http\Controllers\User\ETNewsController;
use App\Http\Controllers\User\ETNewsPageController;
use App\Http\Controllers\User\HrController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\PageAboutClbController;
use App\Http\Controllers\User\HomepageCompetitionController;



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
Route::get('/ve-cau-lac-bo',[PageAboutClbController::class,'index']);
Route::get('/nhan-su',[HrController::class,'index']);
Route::get('/cuoc-thi-trang-chu',[HomepageCompetitionController::class,'index']);

Route::get('admin',[AdminDashBoardController::class,'index']);
Route::get('admin/competition',[AdminCompetitionController::class,'index']);
Route::get('admin/competition/{id}',[AdminCompetitionController::class,'view']);
