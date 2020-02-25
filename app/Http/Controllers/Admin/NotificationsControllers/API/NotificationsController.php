<?php

namespace App\Http\Controllers\Admin\NotificationsControllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Shared\NotificationServices;

class NotificationsController extends Controller{

	/**
	* The path to the "view" folder of this controller
	*
	* @var string
	*/
	public const PATH = '';
	protected $sNotifications;

	public function __construct(NotificationServices $sNotifications){
		$this->sNotifications = $sNotifications;
	}

	public function index(){
		return $this->sNotifications->index();
	}

	public function view(){
		return $this->sNotifications->view();
	}

	public function read($id){
		return $this->sNotifications->read($id);
	}
}
