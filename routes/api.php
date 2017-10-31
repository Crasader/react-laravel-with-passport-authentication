<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::post('auth/register', 'Api\Auth\RegisterController@register')->name('auth.register');
Route::post('auth/login', 'Api\Auth\LoginController@login')->name('auth.login');

Route::resource('category', 'Api\CategoryController');
Route::resource('course','Api\CourseController');


Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::delete('/auth/logout', 'Api\Auth\LoginController@logout')->name('auth.logout');

    Route::get('/test',function(){
       return response()->json([
           'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi at cupiditate delectus eum exercitationem expedita hic impedit molestiae molestias nisi placeat, praesentium quaerat quas quo ratione recusandae, soluta unde!'
       ],200);
    });

});