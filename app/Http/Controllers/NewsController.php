<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Requests\NewsStoreRequest;
use App\Http\Requests\NewsUpdateRequest;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();

        return view('news.index', compact('news'));
    }

    public function create()
    {
        return view('news.create');
    }

    public function store(NewsStoreRequest $request)
    {
        $imagePath = request('image')->store('uploads/news', 'public');

        News::create([
            'title' => $request->title,
            'image' => $imagePath, 
            'link' => $request->link, 
        ]);

        return to_route('news.index')->with(['newsMessages' => true, 'message' => 'News blog created!']);
    }

    public function edit(News $news)
    {
        return view('news.edit', compact('news'));
    }

    public function update(NewsUpdateRequest $request, News $news) 
    {
        if (request('image')) {
            $imagePath = request('image')->store('uploads/news', 'public');

            $imageArray = ['image' => $imagePath];
        }

        $news->update(array_merge(
            [
                'title' => $request->title,
                'link' => $request->link,
            ],
            $imageArray ?? [],
        ));

        return to_route('news.index')->with(['newsMessages' => true, 'message' => 'News blog updated!']);
    }

    public function destroy(News $news)
    {
        $news->delete();

        return to_route('news.index')->with(['newsMessages' => true, 'message' => 'News blog deleted!']);
    }
}
