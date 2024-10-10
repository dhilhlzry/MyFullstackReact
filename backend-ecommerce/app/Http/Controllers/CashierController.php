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
            'amount' => 'required|numeric',
            'totalPrice' => 'required|numeric',
            'pay' => 'required|numeric',
            'change' => 'required|numeric',
        ]);

        $kodeauto = Headtrans::selectRaw('LPAD(CONVERT(COUNT("kode") + 1, char(8)) , 5,"0") as invoice')->first();

        // Simpan data ke database atau lakukan sesuatu
        Headtrans::create([
            'code' => 'TRS' . $kodeauto->invoice,
            'date' => Carbon::parse(now())->locale('id')->isoFormat('D MMMM Y'),
            'user' => 'PTG00001',
            'amount' => $request->amount,
            'totalprice' => $request->totalPrice,
            'pay' => $request->pay,
            'change' => $request->change,
        ]);

        foreach ($request->id_products as $index => $id) {
            $detail = DB::table('products')->where('id', $id)->first();
            $quantity = $request->quantities[$index];

            Detailtrans::create([
                'code' => 'TRS' . $kodeauto->invoice,
                'id_product' => $detail->id,
                'product' => $detail->name,
                'price' => $detail->price,
                'quantity' => $quantity,
                'subtotal' => $detail->price * $quantity,
            ]);
        }

        return response()->json(['message' => 'Product created successfully'], 201);
    }
}
