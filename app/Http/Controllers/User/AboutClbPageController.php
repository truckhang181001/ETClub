<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AboutClbPageController extends Controller
{
    function index(){
        return view('AboutClbPage.Index');
    }
}
