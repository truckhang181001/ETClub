<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StringVideoPageController extends Controller
{
    function index(){
        return view('StringVideoPage.Index');
    }
}
