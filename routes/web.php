<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\StudentController;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::prefix('admin')
    ->name('admin.') // 👉 tambahkan prefix nama di sini
    ->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Untuk CRUD table Student
        Route::resource('students', StudentController::class);
    });