<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AllCompetitionPageController extends Controller
{
    function index(){
        return view('AllCompetitionPage.Index');
    }
}
