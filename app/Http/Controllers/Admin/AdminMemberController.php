<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminMemberController extends Controller
{
    function index(){
        return view('Admin.MemberPage.Index');
    }
}
