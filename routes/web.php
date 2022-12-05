<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeIndexController;
use App\Http\Controllers\NocoDbIndexController;
use App\Http\Controllers\AproposIndexController;
use App\Http\Controllers\ContactIndexController;
use App\Http\Controllers\DevopsIndexController;
use App\Http\Controllers\ServicesIndexController;
use App\Http\Controllers\NextCloudIndexController;
use App\Http\Controllers\DigitalisationIndexController;
use App\Http\Controllers\DolibarrIndexController;
use App\Http\Controllers\IntegrateurN8NIndexController;
use App\Http\Controllers\ServiceDevelopmentWebController;
use App\Http\Controllers\SupportTechniqueIndexController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', HomeIndexController::class)->name('homepage');
Route::get('/contact', ContactIndexController::class)->name('contact');
Route::get('/qui-sommes-nous', AproposIndexController::class)->name('apropos');
Route::get('/services', ServicesIndexController::class)->name('services');
Route::get('/services/digitalisation', DigitalisationIndexController::class)->name('digitalisation');
Route::get('/services/developpement-web', ServiceDevelopmentWebController::class)->name('devWeb');
Route::get('/services/support-technique', SupportTechniqueIndexController::class)->name('supporttech');
Route::get('/services/devops-et-deploiements-app', DevopsIndexController::class)->name('devops');
Route::get('/services/digitalisation/integrateur-nextcloud-au-cameroun', NextCloudIndexController::class)->name('nextcloud');
Route::get('/services/digitalisation/integrateur-nocodb-au-cameroun', NocoDbIndexController::class)->name('nocodb');
Route::get('/services/digitalisation/integrateur-n8n-au-cameroun', IntegrateurN8NIndexController::class)->name('n8n');
Route::get('/services/digitalisation/integrateur-dolibarr-au-cameroun', DolibarrIndexController::class)->name('dolibarr');
Route::get('/services/digitalisation/integrateur-zimbra-au-cameroun', ZimbraIndexController::class)->name('zimbra');

require __DIR__ . '/auth.php';
