<?php

use Illuminate\Database\Seeder;
use App\Course;
use Illuminate\Support\Facades\DB;

class SubscriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subscriptions')->truncate();
        $course = Course::count();

        for ($i = 1; $i <= $course; $i++) {
            DB::table('subscriptions')->insert([
                'user_id' => rand(2,5),
                'course_id' => $i,
                'active' => rand(0,1)
        ]);
        }
    }
}
