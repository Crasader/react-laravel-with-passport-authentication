<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Rating;
use App\User;

class RatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Rating::truncate();

        $faker = Faker::create();

        $users = User::count();
        for($i=1;$i<=100;$i++){
            $name = $faker->sentence($nbWords = 6, $variableNbWords = true);
            Rating::create([
                'course_id' => $faker->numberBetween(1,20),
                'user_id' => $faker->numberBetween(2,$users+1),
                'stars' => $faker->numberBetween(1,5)
            ]);
        }
    }
}
