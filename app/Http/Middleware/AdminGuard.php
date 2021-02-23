<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;

class AdminGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::check()) 
        {
            $user = Auth::user();

            if($user->role->title == "admin")
            {
                return $next($request);
            }
            return redirect('/');
        }
        else 
        {
            return redirect('/login');
        }
    }
}
