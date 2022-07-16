<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServicesCollection;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index() 
    {
        $types = ServiceType::all();

        $array = [];

        foreach ($types as $type) {
            $allBlogs = Service::where('service_type_id', $type->id)->get();
            $service = new ServicesCollection($allBlogs);
            $array[strtolower(str_replace(' ', '_', $type->name))] = $service;
        }
        return $array;
    }
}
