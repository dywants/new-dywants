<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DevisIndexController extends Controller
{
   public function __invoke()
   {
     return Inertia::render('Devis');
   }
}