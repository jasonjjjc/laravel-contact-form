<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\ContactUsFormController;

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

Route::get('/', [AppController::class, 'index']);

Route::get('/contact', [ContactUsFormController::class, 'createForm']);


// Using throttle to rate limit the number of form submissions possible. 
// The first number 1 is the maximum number of requests allowed.
// The second number 1 is the time window in minutes.
// An error message will be displayed on the contact page if the user exceeds the limit.
Route::middleware(['throttle:2,1'])->group(function () {
    Route::post('/contact', [ContactUsFormController::class, 'ContactUsForm'])->name('contact.store');
});
