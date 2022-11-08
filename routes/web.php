<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeIndexController;
use App\Http\Controllers\NocoDbIndexController;
use App\Http\Controllers\AproposIndexController;
use App\Http\Controllers\ContactIndexController;
use App\Http\Controllers\ServicesIndexController;
use App\Http\Controllers\NextCloudIndexController;
use App\Http\Controllers\DigitalisationIndexController;
use App\Http\Controllers\DolibarrIndexController;
use App\Http\Controllers\IntegrateurN8NIndexController;
use App\Http\Controllers\ServiceDevelopmentWebController;
use App\Http\Controllers\ZimbraIndexController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', HomeIndexController::class)->name('homepage');
Route::get('/contact', ContactIndexController::class)->name('contact');
Route::get('/qui-sommes-nous', AproposIndexController::class)->name('apropos');
Route::get('/services', ServicesIndexController::class)->name('services');
Route::get('/digitalisation', DigitalisationIndexController::class)->name('digitalisation');
Route::get('/services/developpement-web', ServiceDevelopmentWebController::class)->name('devWeb');
Route::get('/services/nextcloud', NextCloudIndexController::class)->name('nextcloud');
Route::get('/services/nocodb', NocoDbIndexController::class)->name('nocodb');
Route::get('/services/integrateur-n8n-au-cameroun', IntegrateurN8NIndexController::class)->name('n8n');
Route::get('/services/integrateur-dolibarr-au-cameroun', DolibarrIndexController::class)->name('dolibarr');
Route::get('/services/integrateur-zimbra-au-cameroun', ZimbraIndexController::class)->name('zimbra');

require __DIR__ . '/auth.php';
