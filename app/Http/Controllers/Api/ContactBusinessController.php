<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\ContactBusiness;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactBusinessStoreRequest;

class ContactBusinessController extends Controller
{
    public function store(ContactBusinessStoreRequest $request)
    {
        $contact_careers = ContactBusiness::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'company_name' => $request->company_name,
            'phone_number' => $request->phone_number,
            'message' => $request->message,
        ]);

        if (!$contact_careers) {
            return response()->json(['message' => 'Error', 'code' => 400]);
        }

        return response()->json(['message' => 'Successfully submited', 'code' => 200]);
    }
}