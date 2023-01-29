<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjetsController extends Controller
{
    public function index(){
        return Inertia::render('Projets');
    }
}