<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompetitionCompilationPageController extends Controller
{
    function index(){
        return view('CompetitionCompilationPage.Index');
        return view('pagination.Index');
    }
}
