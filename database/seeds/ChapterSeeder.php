<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Chapter;

class ChapterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Chapter::truncate();

        $faker = Faker::create();

        for($i=1;$i<=100;$i++){
            $name = $faker->sentence($nbWords = 6, $variableNbWords = true);
            Chapter::create([
               'course_id' => $faker->numberBetween(1,20),
               'title' => $name,
               'slug' => strtolower(str_replace(' ','-',$name))
            ]);
        }
    }
}
