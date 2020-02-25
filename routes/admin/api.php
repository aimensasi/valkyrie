<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->group(function(){

	/**
	*
	* Notifications Resouces Routes
	*
	*/
	Route::name('notifications.')->group(function () {
		Route::get('notifications', 'NotificationsControllers\API\NotificationsController@index')->name('index');
		Route::put('notifications/view', 'NotificationsControllers\API\NotificationsController@view')->name('view');
		Route::put('notifications/{id}/read', 'NotificationsControllers\API\NotificationsController@read')->name('read');
	});
});
