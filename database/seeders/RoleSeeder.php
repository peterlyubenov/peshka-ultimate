<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ["student", "lecturer", "admin"];

        foreach($roles as $role_title) {
            $role = new Role();
            $role->title = $role_title;

            $role->save();
        }
    }
}
