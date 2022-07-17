<?php

namespace App\Http\Controllers;

use App\Models\AboutUsBlog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Requests\BlogStoreRequest;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = AboutUsBlog::all();

        return view('blogs.index', compact('blogs'));
    }

    public function create()
    {  
        return view('blogs.create');
    }

    public function store(BlogStoreRequest $request)
    {
        $imagePath = request('image1')->store('uploads/about_us_blogs', 'public');
        $imagePath2 = request('image2')->store('uploads/about_us_blogs', 'public');

        AboutUsBlog::create([
            'text' => $request->text,
            'image1' => $imagePath,
            'image2' => $imagePath2,
        ]);

        return to_route('blogs.index')->with(['blogMessages' => true, 'message' => 'About us blog created!']);
    }

    public function edit(AboutUsBlog $blog)
    {
        return view('blogs.edit', compact('blog'));
    }

    public function update(AboutUsBlog $blog)
    {  
        $data = request()->validate([
            'text' => 'required',
            'image1' => '',
            'image2' => '',
        ]);

        if (request('image1')) {
            $imagePath = request('image1')->store('uploads/about_us_blogs', 'public');
            $firstImg = ['image1' => $imagePath];

            File::delete(public_path('storage/'.$blog->image1));
        }

        if (request('image2')) {
            $imagePath2 = request('image2')->store('uploads/about_us_blogs', 'public');
            $otherImg = ['image2' => $imagePath2];

            File::delete(public_path('storage/'.$blog->image2));
        }
    
        $blog->update(array_merge(
            $data,
            $firstImg ?? [],
            $otherImg ?? [],
        ));

        return to_route('blogs.index')->with(['blogMessages' => true, 'message' => 'About us blog updated!']);;
    }

    public function destroy(AboutUsBlog $blog)
    {

        File::delete(public_path('storage/'.$blog->image1));
        File::delete(public_path('storage/'.$blog->image2));

        $blog->delete();

        return to_route('blogs.index')->with(['blogMessages' => true, 'message' => 'About us blog deleted!']);;
    }
}
