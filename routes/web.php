<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Admin routes
Route::get('/admin', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.index');
Route::resource('/admin/faculties', App\Http\Controllers\Admin\FacultyController::class);
Route::get('/admin/faculties/{id}/delete', [App\Http\Controllers\Admin\FacultyController::class, 'delete'])->name('faculties.delete');
// Route::resource('/admin/majors', App\Http\Controllers\Admin\MajorsController::class);
//Route::resource('/admin/schedules', App\Http\Controllers\Admin\SchedulesController::class);

// Majors routes
Route::get('/admin/majors/{major}', [App\Http\Controllers\Admin\MajorsController::class, 'show'])->name('majors.show');
Route::get('/admin/majors/create', [App\Http\Controllers\Admin\MajorsController::class, 'create'])->name('majors.create');
Route::post('/admin/majors', [App\Http\Controllers\Admin\MajorsController::class, 'store'])->name('majors.store');
Route::get('/admin/majors/{major}/edit', [App\Http\Controllers\Admin\MajorsController::class, 'edit'])->name('majors.edit');
Route::put('/admin/majors/{major}', [App\Http\Controllers\Admin\MajorsController::class, 'update'])->name('majors.update');
Route::get('/admin/majors/{id}/delete', [App\Http\Controllers\Admin\MajorsController::class, 'delete'])->name('majors.delete');
Route::delete('/admin/majors/{major}', [App\Http\Controllers\Admin\MajorsController::class, 'destroy'])->name('majors.destroy');

// Schedules routes routes
Route::get('/admin/schedules/{schedule}', [App\Http\Controllers\Admin\SchedulesController::class, 'show'])->name('schedules.show');
Route::get('/admin/schedules/create', [App\Http\Controllers\Admin\SchedulesController::class, 'create'])->name('schedules.create');
Route::post('/admin/schedules', [App\Http\Controllers\Admin\SchedulesController::class, 'store'])->name('schedules.store');
Route::get('/admin/schedules/{schedule}/edit', [App\Http\Controllers\Admin\SchedulesController::class, 'edit'])->name('schedules.edit');
Route::put('/admin/schedules/{schedule}', [App\Http\Controllers\Admin\SchedulesController::class, 'update'])->name('schedules.update');
Route::get('/admin/schedules/{id}/delete', [App\Http\Controllers\Admin\SchedulesController::class, 'delete'])->name('schedules.delete');
Route::delete('/admin/schedules/{schedule}', [App\Http\Controllers\Admin\SchedulesController::class, 'destroy'])->name('schedules.destroy');