<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Headtrans extends Model
{
    use HasFactory;
    protected $table = 'headtrans';
    protected $fillable = [
        'code',
        'date',
        'user',
        'amount',
        'totalprice',
        'pay',
        'change',
    ];
}
