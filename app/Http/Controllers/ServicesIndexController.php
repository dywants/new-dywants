<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ServicesIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Services');
    }
}
