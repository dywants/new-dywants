<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


class NextCloudIndexController extends Controller
{
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('Services/Nextcloud');
    }
}
