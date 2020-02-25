<?php

namespace App\Services\Shared;

use Illuminate\Http\Request;
use App\Services\Shared\TransformerService;


class NotificationServices extends TransformerService{

	public function index(){
		$admin = current_admin();
		$notifications = $admin->notifications;

		return respond(['rows' => $this->transformCollection($notifications)]);
	}

	public function view(){
		$admin = current_admin();
		$admin->notifications()->where('viewed_at', null)->update([
			'viewed_at' => now()
		]);

		return success(["message" => "Notifications updated."]);
	}

	public function read($id){
		$admin = current_admin();
		$admin->notifications()->where('id', $id)->update([
			'read_at' => now()
		]);

		return success(["message" => "Notifications updated."]);
	}


	public function transform($notification){
		return [
			'id' => $notification->id,
			'principal_id' => $notification->data['id'],
			'link' => $notification->data['link'],
			'message' => $notification->data['message'],
			'received_on' => $notification->data['received_on'],
			'read_at' => $notification->read_at,
			'viewed_at' => $notification->viewed_at,
		];
	}
}
