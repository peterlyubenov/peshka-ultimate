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
            ->join("users", "users.id", "=", "schedule_subjects.lecturer_id")
            ->where([
                ['majors.name', '=', $request->input('major')], 
                ['schedules.year', '=', $request->input('year')]
            ])
            ->get(["users.name", "schedule_subjects.group", "schedule_subjects.week", "schedule_subjects.room", "schedule_subjects.subject", "schedule_subjects.time", "schedule_subjects.weekDay"]);

        return [
            "result" => $schedule,
        ];
    }

    /**
     * Searches the major names and returns a list of suggestions
     */
    public function search_majors(Request $request) {
        $majors = Major::where('name', 'like', $request->input('q').'%')->get();

        return $majors;
    }
}
