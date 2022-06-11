<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OrganizationalStructurePageController extends Controller
{
    function index(){
        return view('OrganizationalStructurePage.Index');
    }
}
