<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\ContactPersonal;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactPersonalsStoreRequest;

class ContactPeronalsController extends Controller
{
    public function store(ContactPersonalsStoreRequest $request)
    {
        $contact_personals = ContactPersonal::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        if (!$contact_personals) {
            return response()->json(['message' => 'Error', 'code' => 400]);
        }

        return response()->json(['message' => 'Successfully submited', 'code' => 200]);
    }
}
