<?php

use Illuminate\Support\Facades\Route;
use NotaMe\Http\Controllers\ChatController;
use NotaMe\Http\Controllers\WebController;

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

Route::group(['namespace' => 'web', 'as' => 'web.'], function (){
    /** Página Inicial */
    Route::get('/', [WebController::class, 'index'])->name('index');
});
