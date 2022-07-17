<?php

namespace App\Http\Controllers;

use App\Models\ContactPersonal;
use Illuminate\Http\Request;

class ContactPeronalsController extends Controller
{
    public function index()
    {
        $personals = ContactPersonal::all();

        return view('careers.contact_personals.index', compact('personals'));
    }

    public function show(ContactPersonal $personal)
    {
        $personal->update(['is_seen' => 1]);

        return view('careers.contact_personals.show', compact('personal'));
    }
}
