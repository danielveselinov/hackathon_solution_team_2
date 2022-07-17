<?php

namespace App\Http\Controllers;

use App\Http\Requests\CareerStoreRequest;
use App\Http\Requests\CareerUpdateRequest;
use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CareersController extends Controller
{
    public function index()
    {
        $careers = Career::all();

        return view('careers.index', compact('careers'));
    }

    public function create()
    {  
        return view('careers.create');
    }

    public function store(CareerStoreRequest $request)
    {
        $imagePath = request('image1')->store('uploads/careers', 'public');
        $imagePath2 = request('image2')->store('uploads/careers', 'public');

        Career::create([
            'text' => $request->text,
            'image1' => $imagePath,
            'image2' => $imagePath2,
        ]);

        return to_route('career.index')->with(['careerMessages' => true, 'message' => 'Career blog created!']);
    }

    public function edit(Career $career)
    {
        return view('careers.edit', compact('career'));
    }

    public function update(CareerUpdateRequest $request, Career $career)
    {          
        if (request('image1')) {
            $imagePath = request('image1')->store('uploads/careers', 'public');
            $firstImg = ['image1' => $imagePath];

            File::delete(public_path('storage/'.$career->image1));
        }

        if (request('image2')) {
            $imagePath2 = request('image2')->store('uploads/careers', 'public');
            $otherImg = ['image2' => $imagePath2];

            File::delete(public_path('storage/'.$career->image2));
        }

        $career->update(array_merge(
            [
                'text' => $request->text
            ],
            $firstImg ?? [],
            $otherImg ?? [],
        ));



        return to_route('career.index')->with(['careerMessages' => true, 'message' => 'Career blog updated!']);;
    }

    public function destroy(Career $career)
    {
        File::delete(public_path('storage/'.$career->image1));
        File::delete(public_path('storage/'.$career->image2));

        $career->delete();

        return to_route('career.index')->with(['careerMessages' => true, 'message' => 'Career blog deleted!']);;
    }
}
