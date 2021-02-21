<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('major_id');
            $table->integer('year');
            $table->timestamps();

            $table->foreign('major_id')->references('id')->on('majors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schedules', function(Blueprint $table) {
            $table->dropForeign('major_id');
        });
        Schema::dropIfExists('schedules');
    }
}
