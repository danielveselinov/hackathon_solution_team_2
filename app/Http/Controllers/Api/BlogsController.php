<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogsCollection;
use App\Models\AboutUsBlog;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index()
    {
        return new BlogsCollection(AboutUsBlog::all());
    }
}
