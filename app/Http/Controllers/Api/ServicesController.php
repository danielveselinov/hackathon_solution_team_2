<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServicesCollection;
use App\Models\Service;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index() 
    {
        return new ServicesCollection(Service::all());
    }
}
