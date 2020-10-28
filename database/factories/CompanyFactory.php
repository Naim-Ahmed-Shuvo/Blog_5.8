<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Company;
use Faker\Generator as Faker;

$factory->define(App\Company::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
    ];
});
