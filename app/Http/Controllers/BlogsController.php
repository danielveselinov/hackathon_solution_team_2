<?php

namespace App\Http\Controllers;

use App\Models\AboutUsBlog;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = AboutUsBlog::all();

        return view('blogs.index', compact('blogs'));
    }
}
