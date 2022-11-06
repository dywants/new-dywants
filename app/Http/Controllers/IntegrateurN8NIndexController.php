<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class IntegrateurN8NIndexController extends Controller
{
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('Services/N8n');
    }
}
