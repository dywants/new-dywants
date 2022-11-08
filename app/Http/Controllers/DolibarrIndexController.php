<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class DolibarrIndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Services/Dolibarr');
    }
}
