<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);
Route::middleware('auth:api')->group(function(){
    Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
});


Route::get('users', [App\Http\Controllers\UserController::class, 'index'])->middleware(['web', 'auth:api']);
Route::post('users', [App\Http\Controllers\UserController::class, 'store']);
Route::get('users/{id}', [App\Http\Controllers\UserController::class, 'show']);
Route::put('users/{id}', [App\Http\Controllers\UserController::class, 'update']);
Route::delete('users/{id}', [App\Http\Controllers\UserController::class, 'destroy'])->middleware(['web', 'auth:api']);


Route::get('/favorites/{favorito}', [App\Http\Controllers\FavoriteController::class, 'index']);
Route::post('/favorites', [App\Http\Controllers\FavoriteController::class, 'store']);
Route::delete('/favorites/{favorito}', [App\Http\Controllers\FavoriteController::class, 'destroy']);
