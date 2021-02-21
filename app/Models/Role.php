<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Role extends Model
{
    use HasFactory;

    /**
     * The users that belong to this role
     */
    public function users() {
        return $this->hasMany(User::class); // Many to one
    }
}
