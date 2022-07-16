<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MissionsCollection;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionsController extends Controller
{
    public function index() 
    {
        return new MissionsCollection(Mission::all());
    }
}
