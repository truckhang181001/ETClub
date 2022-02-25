<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CLBPageController extends Controller
{
    function index(){
        return view('CLBPage.Index');
    }
}
