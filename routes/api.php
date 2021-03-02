<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/schedule', [App\Http\Controllers\API\SchedulesAPIController::class, 'schedule']);
Route::get('/majors_suggestions', [App\Http\Controllers\API\SchedulesAPIController::class, 'search_majors']);