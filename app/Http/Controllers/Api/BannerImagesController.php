<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BannerImage;
use App\Http\Resources\BannerImagesCollection;
use Illuminate\Http\Request;

class BannerImagesController extends Controller
{
    public function index()
    {
        return new BannerImagesCollection(BannerImage::all());
    }
}
