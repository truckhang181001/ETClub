<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAboutClubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_clubs', function (Blueprint $table) {
            $table->id();
            $table->text('short_desc');
            $table->text('history');
            $table->text('vision');
            $table->text('mission');
            $table->integer('num_year');
            $table->integer('num_member');
            $table->integer('num_old_member');
            $table->integer('num_workshop');
            $table->integer('num_competition');
            $table->integer('num_channel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about_clubs');
    }
}
