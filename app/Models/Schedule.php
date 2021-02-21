<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    public function major() {
        return $this->belongsTo(Major::class);
    }

    public function subjects() {
        return $this->hasMany(ScheduleSubject::class);
    }
}
