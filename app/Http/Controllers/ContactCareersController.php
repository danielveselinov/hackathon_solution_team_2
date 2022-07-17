<?php

namespace App\Http\Controllers;

use App\Models\ContactCareers;
use Illuminate\Http\Request;

class ContactCareersController extends Controller
{
    public function index()
    {
        $careers = ContactCareers::all();

        return view('careers.contact_careers.index', compact('careers'));
    }

    public function show(ContactCareers $career)
    {
        $career->update(['is_seen' => 1]);

        return view('careers.contact_careers.show', compact('career'));
    }
}
