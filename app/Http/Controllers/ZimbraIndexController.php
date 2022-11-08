<?php

namespace App\Http\Controllers;

use Inertia\Inertia;


class ZimbraIndexController extends Controller
{
    public function __invoke(): \Inertia\Response
    {
        return Inertia::render('Services/Zimbra');
    }
}
