<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Admin;
use Faker\Generator as Faker;

$factory->define(Admin::class, function (Faker $faker) {
  return [
		'first_name' => $faker->firstName,
		'last_name' => $faker->lastName,
		'email' => $faker->unique()->safeEmail,
		'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
		'active' => $faker->boolean(50),
		'created_at' => $faker->dateTime,
		'updated_at' => $faker->dateTime,
  ];
});
