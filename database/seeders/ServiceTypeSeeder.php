<?php

namespace Database\Seeders;

use App\Models\ServiceType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ServiceType::insert([
            ['name' => 'Land Freight'],
            ['name' => 'Water Freight'],
            ['name' => 'Air Freight'],
            ['name' => 'Warehouse Storage'],
        ]);
    }
}
