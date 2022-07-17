<?php

namespace App\Http\Controllers;

use App\Models\ContactBusiness;
use Illuminate\Http\Request;

class ContactBusinessController extends Controller
{
    public function index()
    {
        $businesses = ContactBusiness::all();

        return view('careers.contact_businesses.index', compact('businesses'));
    }

    public function show(ContactBusiness $business)
    {
        $business->update(['is_seen' => 1]);

        return view('careers.contact_businesses.show', compact('business'));
    }
}
