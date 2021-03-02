<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\ScheduleSubject;
use App\Models\Schedule;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $schedule = fopen("public/schedules/schedule7.json", "r") or die("Unable to open file!");
        $json_content = json_decode(fread($schedule, filesize("public/schedules/schedule7.json")), true);

        // $schedule_model = new Schedule();
        // $schedule_model->major_id = 1;
        // $schedule_model->year = 4;
        // $schedule_model->save();

        $weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        for($i = 0; $i < count($weekDays); $i++) {
            $weekDay = $weekDays[$i];

            foreach($json_content[$i] as $subj) {
                $subject = new ScheduleSubject();
                $subject->subject = $subj['disciplina'];
                $subject->lecturer_id = 2;
                $subject->time = $subj['time'];
                $subject->room = $subj['room'];
                $subject->group = $subj['grupa'];
                $subject->week = $subj['sedmica'];
                $subject->weekDay = $weekDay;
                $subject->schedule_id = 1;
                $subject->save();
            }
        }
    }
}
