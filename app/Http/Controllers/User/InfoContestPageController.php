<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InfoContestPageController extends Controller
{
    function index(){
        return view('InfoContestPage.Index');
    }
}
