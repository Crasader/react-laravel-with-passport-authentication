<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Course;
use App\User;
use App\Category;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Course::truncate();

        $faker = Faker::create();

        $users = User::count();
        $categories = Category::count();


        for ($i = 1; $i <= 20; $i++) {
            $name = $faker->sentence($nbWords = 6, $variableNbWords = true);
            Course::create([
                'slug' => strtolower(str_replace(' ','-',$name)),
                'category' => $faker->numberBetween(1,$categories),
                'title' => $name,
                'subtitle' => $faker->realText($maxNbChars = 50),
                'requirements' => $faker->realText($maxNbChars = 200),
                'description' => $faker->realText($maxNbChars = 500),
                'benefits' => $faker->realText($maxNbChars = 150),
                'price' => 0,
                'language' => 'english',
                'created_by' => $faker->numberBetween(2,$users+1)
            ]);
        }

    }
}
