<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(ChapterSeeder::class);
        $this->call(SubscriptionSeeder::class);
        $this->call(RatingSeeder::class);
        $this->call(VideoSeeder::class);
    }
}
