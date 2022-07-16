<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Http\Request;

class MissionsController extends Controller
{
    public function index()
    {
        $missions = Mission::all();

        return view('missions.index', compact('missions'));
    }
}
