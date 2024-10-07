<?php

namespace App\Http\Controllers;

use App\Models\Detailtrans;
use App\Models\Headtrans;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CashierController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'jumlah' => 'required|numeric',
            'totalPrice' => 'required|numeric',
            'pay' => 'required|numeric',
            'change' => 'required|numeric',
        ]);

        $kodeauto = Headtrans::selectRaw('LPAD(CONVERT(COUNT("kode") + 1, char(8)) , 5,"0") as invoice')->first();

        // Simpan data ke database atau lakukan sesuatu
        Headtrans::create([
            'kode' => 'TRS' . $kodeauto->invoice,
            'tanggal' => Carbon::parse(now())->locale('id')->isoFormat('D MMMM Y'),
            'user' => 'PTG00001',
            'jumlah' => $request->jumlah,
            'total_bayar' => $request->totalPrice,
            'bayar' => $request->pay,
            'kembali' => $request->change,
        ]);

        foreach ($request->id_produk as $index => $id) {
            $detail = DB::table('products')->where('id', $id)->first();
            $quantity = $request->qty[$index];

            Detailtrans::create([
                'kode' => 'TRS' . $kodeauto->invoice,
                'kode_produk' => $detail->id,
                'produk' => $detail->name,
                'harga' => $detail->price,
                'qty' => $quantity,
                'subtotal' => $detail->price * $quantity,
            ]);
        }

        return response()->json(['message' => 'Product created successfully'], 201);
    }
}
