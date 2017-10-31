<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Video;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Video::truncate();

        $faker = Faker::create();

        for ($i = 1; $i <= 200; $i++) {
            $name = $faker->sentence($nbWords = 6, $variableNbWords = true);
            Video::create([
                'course_id' => $faker->numberBetween(1, 20),
                'chapter_id' => $faker->numberBetween(1, 100),
                'title' => $name,
                'slug' => strtolower(str_replace(' ', '-', $name)),
                'description' => $faker->realText($maxNbChars = 250),
                'url' => $faker->imageUrl(250, 250, 'cats', true, 'infoTiq'),
                'order' => $faker->numberBetween(1, 100),
                'cover' => $faker->numberBetween(0,1),
                'duration' => $faker->randomFloat(2, $min = 2, $max = 30)
            ]);
        }
    }
}
