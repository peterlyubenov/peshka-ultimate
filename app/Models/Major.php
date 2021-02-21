<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;

    public function schedules() {
        return $this->hasMany(Schedule::class);
    }

    public function faculty() {
        return $this->belongsTo(Faculty::class);
    }
}
