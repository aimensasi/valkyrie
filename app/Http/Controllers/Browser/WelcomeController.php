<?php

namespace App\Http\Controllers\Browser;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class WelcomeController extends Controller{

	protected $path = 'browser.';

	public function root(){
		return view($this->path . 'welcome');
	}
}
