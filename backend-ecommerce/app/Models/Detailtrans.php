<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detailtrans extends Model
{use HasFactory;
    protected $table = 'detailtrans';
    protected $fillable = [
        'id',
        'kode',
        'kode_produk',
        'produk',
        'harga',
        'qty',
        'subtotal',
    ];
}
