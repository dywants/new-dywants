<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Homepage');
    }
}
