<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('headtrans', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->string('date');
            $table->string('user');
            $table->integer('amount');
            $table->integer('totalprice');
            $table->integer('pay');
            $table->integer('change');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('headtrans');
    }
};
