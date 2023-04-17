<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

Route::get('/datos', function () {
    $datos = ['nombre' => 'Juan', 'edad' => 30];
    return response()->json($datos);
})->middleware(\Fruitcake\Cors\HandleCors::class);
