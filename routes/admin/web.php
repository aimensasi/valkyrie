<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function(){

	Route::get('login', 'Core\AuthController@showLogin')->name('login.show');
	Route::post('login', 'Core\AuthController@login')->name('login.post');
});


Route::middleware('auth')->group(function(){


	/**
	*
	* User Profile & Account Setting Routes
	*
	*/
	Route::get('profile', 'Core\ProfileController@profile')->name('profile');
	Route::post('profile', 'Core\ProfileController@update')->name('profile.update');
	Route::put('profile', 'Core\ProfileController@changePassword')->name('profile.password');


	/**
	 * Logout Route
	 */
	Route::get('logout', 'Core\AuthController@logout')->name('logout');


	/**
	 * Root Routes
	 */
	Route::get('dashboard', 'Core\DashboardController@index')->name('dashboard');
	Route::get('/', function(){
		return redirect('dashboard');
	})->name('root');
});
