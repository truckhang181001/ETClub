<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminEtNewsController extends Controller
{
    function index(){
        return view('Admin.ETNewsPage.Index');
    }
}
