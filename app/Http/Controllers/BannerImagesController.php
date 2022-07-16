<?php

namespace App\Http\Controllers;

use App\Models\BannerImage;
use Illuminate\Http\Request;

class BannerImagesController extends Controller
{
    public function index()
    {
        $images = BannerImage::all();

        return view('banner.index', compact('images'));
    }
}
