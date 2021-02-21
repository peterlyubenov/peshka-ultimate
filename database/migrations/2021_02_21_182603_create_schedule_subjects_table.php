<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScheduleSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedule_subjects', function (Blueprint $table) {
            $table->id();
            $table->string('subject');
            $table->string('room', 15);
            $table->integer('group')->default(0);
            $table->integer('week')->default(0);
            $table->unsignedBigInteger('lecturer_id');
            $table->timestamps();
            $table->foreign('lecturer_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schedule_subjects', function(Blueprint $table) {
            $table->dropForeign('lecturer_id');
        });
        
        Schema::dropIfExists('schedule_subjects');
    }
}
