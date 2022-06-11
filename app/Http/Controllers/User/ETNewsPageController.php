<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ETNewsPageController extends Controller
{
    function index(){
        return view('ETNewsPage.Index');
    }
}
