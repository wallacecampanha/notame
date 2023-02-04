<?php

namespace NotaMe\Http\Controllers;

use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index()
    {
        return view('index');
    }
}
