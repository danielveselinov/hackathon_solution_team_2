<?php

namespace App\Http\Controllers;

use App\Models\Mission;
use Illuminate\Support\Facades\File;
use App\Http\Requests\MissionsStoreRequest;
use App\Http\Requests\MissionsUpdateRequest;

class MissionsController extends Controller
{
    public function index()
    {
        $missions = Mission::all();

        return view('missions.index', compact('missions'));
    }

    public function create()
    {
        return view('missions.create');
    }

    public function store(MissionsStoreRequest $request)
    {
        $imagePath = request('image')->store('uploads/missions', 'public');

        Mission::create([
            'title' => $request->title,
            'text' => $request->text, 
            'image' => $imagePath, 
        ]);

        return to_route('missions.index')->with(['blogMessages' => true, 'message' => 'Mission blog created!']);
    }

    public function edit(Mission $mission)
    {
        return view('missions.edit', compact('mission'));
    }

    public function update(MissionsUpdateRequest $request, Mission $mission) 
    {
        if (request('image')) {
            $imagePath = request('image')->store('uploads/missions', 'public');

            $imageArray = ['image' => $imagePath];

            File::delete(public_path('storage/'.$mission->image));
        }

        $mission->update(array_merge(
            [
                'title' => $request->title,
                'text' => $request->text,
            ],
            $imageArray ?? [],
        ));

        return to_route('missions.index')->with(['missionMessages' => true, 'message' => 'Misssion blog updated!']);
    }

    public function destroy(Mission $mission)
    {
        File::delete(public_path('storage/'.$mission->image));
        
        $mission->delete();

        return to_route('missions.index')->with(['missionMessages' => true, 'message' => 'Misssion blog deleted!']);
    }
}
