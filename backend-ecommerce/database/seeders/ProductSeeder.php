<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert(
            [
                'id' => 1,
                'name' => 'Meat Burger',
                'image' => 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '20000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 2,
                'name' => 'French Fries',
                'image' => 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '15000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 3,
                'name' => 'Mushroom Soup',
                'image' => 'https://images.unsplash.com/photo-1518710339019-eee82fe8d97f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '17000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 4,
                'name' => 'Rice Bowl Chiken',
                'image' => 'https://images.unsplash.com/photo-1564836235910-c3055ca0f912?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '18000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 5,
                'name' => 'Sweet Desert',
                'image' => 'https://images.unsplash.com/photo-1654796605330-8a1248a2cb07?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '16000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 6,
                'name' => 'Nasi Campur',
                'image' => 'https://images.unsplash.com/photo-1658218615125-00be0c916735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '22000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 7,
                'name' => 'Coffee & Cookies',
                'image' => 'https://images.unsplash.com/photo-1476549427829-9b146dac7b2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '20000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 8,
                'name' => 'Vegie Salad',
                'image' => 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '18000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 9,
                'name' => 'Spagetti',
                'image' => 'https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '21000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 10,
                'name' => 'Meat Steak',
                'image' => 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '26000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 11,
                'name' => 'Soda Drink',
                'image' => 'https://images.unsplash.com/photo-1583898350903-99fa829dad3d?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '17000'
            ]
        );

        DB::table('products')->insert(
            [
                'id' => 12,
                'name' => 'Juice Drink',
                'image' => 'https://images.unsplash.com/photo-1650092071863-b47da0c0065b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'price' => '18000'
            ]
        );
    }
}
