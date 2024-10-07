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
            $table->string('kode')->nullable();
            $table->string('tanggal');
            $table->string('user');
            $table->integer('jumlah');
            $table->integer('total_bayar');
            $table->integer('bayar');
            $table->integer('kembali');
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
