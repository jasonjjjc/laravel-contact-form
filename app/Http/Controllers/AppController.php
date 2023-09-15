<?php

namespace App\Http\Controllers;
use App\Models\News;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        return view('homepage');
        // return view('homepage', ['news' => News::all()]);
    }
}
