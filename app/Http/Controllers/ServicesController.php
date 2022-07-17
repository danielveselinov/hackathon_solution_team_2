<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServicesStoreRequest;
use App\Http\Requests\ServicesUpdateRequest;
use App\Models\Service;
use App\Models\ServiceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ServicesController extends Controller
{
    public function index()
    {
        $services = Service::all();

        return view('services.index', compact('services'));
    }

    public function create()
    {
        $types = ServiceType::all();

        return view('services.create', compact('types'));
    }

    public function store(ServicesStoreRequest $request)
    {
        $imagePath = request('image1')->store('uploads/services', 'public');
        $imagePath2 = request('image2')->store('uploads/services', 'public');

        Service::create([
            'text1' => $request->text1,
            'image1' => $imagePath,
            'text2' => $request->text2,
            'image2' => $imagePath2,
            'service_type_id' => $request->type
        ]);

        return to_route('services.index')->with(['servicesMessages' => true, 'message' => 'Service blog created!']);
    }

    public function edit(Service $service)
    {
        $types = ServiceType::all();

        return view('services.edit', compact('service', 'types'));
    }

    public function update(ServicesUpdateRequest $request, Service $service)
    {          
        if (request('image1')) {
            $imagePath = request('image1')->store('uploads/services', 'public');
            $firstImg = ['image1' => $imagePath];

            File::delete(public_path('storage/'.$service->image1));
        }

        if (request('image2')) {
            $imagePath2 = request('image2')->store('uploads/services', 'public');
            $otherImg = ['image2' => $imagePath2];

            File::delete(public_path('storage/'.$service->image2));
        }

        $service->update(array_merge(
            [
                'text1' => $request->text1,
                'text2' => $request->text2,
                'service_type_id' => $request->type,
            ],
            $firstImg ?? [],
            $otherImg ?? [],
        ));

        return to_route('services.index')->with(['servicesMessages' => true, 'message' => 'Service blog updated!']);;
    }

    public function destroy(Service $service)
    {
        File::delete(public_path('storage/'.$service->image1));
        File::delete(public_path('storage/'.$service->image2));

        $service->delete();

        return to_route('services.index')->with(['servicesMessages' => true, 'message' => 'Service blog deleted!']);;
    }
}
