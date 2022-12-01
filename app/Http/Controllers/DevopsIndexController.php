<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DevopsIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Services/Devops');
    }
}
