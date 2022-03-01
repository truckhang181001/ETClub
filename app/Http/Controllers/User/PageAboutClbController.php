<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageAboutClbController extends Controller
{
    function index(){
        return view('pageaboutclb.Index');
    }
}
