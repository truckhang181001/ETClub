<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HrController extends Controller
{
    function index(){
        return view('HrDepartmentPage.Index');
    }
}
