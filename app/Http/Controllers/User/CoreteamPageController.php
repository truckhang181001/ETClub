<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CoreteamPageController extends Controller
{
    function index(){
        return view('CoreteamPage.Index');
    }
}
