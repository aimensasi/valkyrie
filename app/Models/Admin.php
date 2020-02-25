<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable{
	use Notifiable, SoftDeletes;


	/**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
		"first_name", "last_name", "email", "password", "avatar", "active",
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
		'password',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
		'active' => 'boolean',
  ];

	/**
   * return the admin full name.
   *
   * @return string
   */
	public function getFullNameAttribute(){
		return $this->first_name . ' ' . $this->last_name;
	}
}
