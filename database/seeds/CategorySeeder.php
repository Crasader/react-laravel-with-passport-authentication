<?php

use Illuminate\Database\Seeder;
use Faker\Factory  as Faker;
use App\User;
use App\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();

        $faker = Faker::create();

        $users = User::all()->pluck('id');
        $count = count($users);

        foreach ($users as $user) {
            $name = $faker->word;
            Category::create([
                'slug' => $name,
                'name' => $name,
                'description' => $faker->paragraph,
                'parent_id' => rand(1,$count),
                'priority' => rand(1,10)
            ]);
        }
    }
}
