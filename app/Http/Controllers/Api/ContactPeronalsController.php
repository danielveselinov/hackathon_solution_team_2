<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\ContactPersonal;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactPersonalsStoreRequest;

class ContactPeronalsController extends Controller
{
    public function store(ContactPersonalsStoreRequest $request)
    {

        $data = [
            'email' => $request->email,
        ];


        $contact_personals = ContactPersonal::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'message' => $request->message,
        ]);

        if (!$contact_personals) {
            return response()->json(['message' => 'Error', 'code' => 400]);
        }

        Mail::send('templates/mail', $data, function($message) use ($data) {
            $message->to($data['email'])
                    ->subject('Welcome to Bak Logistics')
                    ->from('info@example.com', 'Bak Logistics Hiring');
        });

        return response()->json(['message' => 'Successfully submited', 'code' => 200]);
    }
}
