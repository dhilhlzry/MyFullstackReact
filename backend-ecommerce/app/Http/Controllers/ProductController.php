<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function index()
    {
        $products = Products::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|string|max:255',
            'price' => 'required|numeric',
        ]);

        // Simpan data ke database atau lakukan sesuatu
        Products::create($request->all());

        return response()->json(['message' => 'Product created successfully'], 201);
    }

    function show($id)
    {
        $product = Products::find($id);
        return response()->json($product);
    }

    function update(Request $request, string $id)
    {
        $request->validate([
            'nameEdit' => 'required|string|max:255',
            'imageEdit' => 'required|string|max:255',
            'priceEdit' => 'required|numeric',
        ]);

        $product = Products::find($id);
        $product->update([
            'name' => $request->nameEdit,
            'image' => $request->imageEdit,
            'price' => $request->priceEdit
        ]);
        return response()->json($product);
    }

    public function delete(string $id)
    {
        $product = Products::findOrFail($id);
        $product->delete();
        return response()->json($product);
    }
}
