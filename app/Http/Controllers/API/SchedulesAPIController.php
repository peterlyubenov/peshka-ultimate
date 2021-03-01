<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Major;
use App\Models\Schedule;

class SchedulesAPIController extends Controller
{

    public function schedule(Request $request) {
        $schedule = Schedule::join("majors", "majors.id", "=", "schedules.major_id")
            ->join("schedule_subjects", "schedule_subjects.schedule_id", "=", "schedules.id")
            ->where([
                ['majors.name', '=', $request->input('major')], 
                ['schedules.year', '=', $request->input('year')]
            ])
            ->get();

        return [
            "result" => $schedule,
        ];
    }
}
