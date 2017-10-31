<?php

use App\User;
use App\Course;
use App\Video;
use App\Category;
use App\Http\Resources\Category as CategoryResource;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
//
//Route::get('/home', function () {
//    return view('home');
//});
//
//Route::get('/courses', function () {
//    return view('home');
//});

Route::get('{slug}', function() {
    return view('home');
})
    ->where('slug', '(?!api)([A-z\d-\/_.]+)?');

//Route::get('/test', function () {
//   $user = User::find(2)->courses()->get();
//    return $user;
//
//    $courses = Course::find(5)->users()->get();
//    return $courses;
//
//    $data = User::find(3)->courses()->wherePivot('active','1')->get();
//    $data = Video::all()->unique('course_id')->except(['course_id']);

//    return new CategoryResource(Category::find(1));
//    return CategoryResource::collection(Category::all());

//    return Course::get(['slug']);
//    return Course::all();

//});