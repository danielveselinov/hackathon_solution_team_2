<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactCareersStoreRequest;
use App\Models\ContactCareers;

class ContactCareersController extends Controller
{
    public function store(ContactCareersStoreRequest $request)
    {
        $contact_careers = ContactCareers::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        if (!$contact_careers) {
            return response()->json(['message' => 'Error', 'code' => 400]);
        }

        return response()->json(['message' => 'Successfully submited', 'code' => 200]);
    }
}
