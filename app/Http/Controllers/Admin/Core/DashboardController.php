<?php

namespace App\Http\Controllers\Admin\Core;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller{

	protected $path = 'admin.dashboard.';

	public function index(){
		return view($this->path . 'index');
	}
}
