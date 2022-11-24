<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SupportTechniqueIndexController extends Controller
{
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('Services/SupportTechnique');
    }
}
