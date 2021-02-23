<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * constructor
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(\App\Http\Middleware\AdminGuard::class);
    }

    /**
     * The admin panel dashboard
     */
    public function index() {
        return view("admin.dashboard");
    }
}
