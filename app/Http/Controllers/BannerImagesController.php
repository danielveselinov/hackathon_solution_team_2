<?php

namespace App\Http\Controllers;

use App\Http\Requests\BannerStoreRequest;
use App\Http\Requests\BannerUpdateRequest;
use App\Models\BannerImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class BannerImagesController extends Controller
{
    public function index()
    {
        $banners = BannerImage::all();

        return view('banners.index', compact('banners'));
    }

    public function create()
    {
        return view('banners.create');
    }

    public function store(BannerStoreRequest $request)
    {
        $imagePath = request('image')->store('uploads/banners', 'public');

        BannerImage::create([
            'image' => $imagePath,
            'is_active' => 1,
        ]);

        return to_route('banners.index')->with(['bannersMessages' => true, 'message' => 'Banner created!']);
    }

    public function edit(BannerImage $banner)
    {
        return view('banners.edit', compact('banner'));
    }

    public function update(BannerUpdateRequest $request, BannerImage $banner) 
    {
        if (request('image')) {
            $imagePath = request('image')->store('uploads/banners', 'public');

            $imageArray = ['image' => $imagePath];

            File::delete(public_path('storage/'.$banner->image));
        }
        
        $banner->update(array_merge(
            [
                'is_active' => $request->status,
            ],
            $imageArray ?? [],
        ));

        return to_route('banners.index')->with(['bannersMessages' => true, 'message' => 'Banner updated!']);
    }

    public function destroy(BannerImage $banner)
    {
        File::delete(public_path('storage/'.$banner->image));

        $banner->delete();

        return to_route('banners.index')->with(['bannersMessages' => true, 'message' => 'Banner deleted!']);
    }
}
