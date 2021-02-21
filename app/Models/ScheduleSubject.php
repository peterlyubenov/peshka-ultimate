<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduleSubject extends Model
{
    use HasFactory;

    public function lecturer() {
        return $this->hasOne(User::class);
    }

    public function schedule() {
        return $this->belongsTo(Schedule::class);
    }
}
