<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomepageCompetitionController extends Controller
{
    function index(){
        return view('HomepageCompetition.Index');
    }
}
