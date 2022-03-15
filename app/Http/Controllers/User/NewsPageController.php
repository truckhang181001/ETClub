<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsPageController extends Controller
{
    function index(){
        return view('NewsPage.Index');
    }
}
