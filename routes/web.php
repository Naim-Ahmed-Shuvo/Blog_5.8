<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestMail;
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
    return view('frontend.master');
});
Route::get('/home', function () {
    return view('backend.welcome');
});
Route::get('/f_home', 'HomeController@f_home');
Auth::routes();
// Route::get('{path}','HomeController@index')->where( 'path', '[\/\w\.-]*' );
// Route::get('/{anypath}','HomeController@index')->where('path','.*');
Route::get('/send_email', function(){
  $details = [
      'title' => 'Mail Title',
      'body' => 'Mail Body'
  ];
  Mail::to('shuvonaim123@gmail.com')->send(new TestMail($details));
  echo 'email has been sent';
});

Route::group(['middleware' => ['auth']], function () {
    //category
        Route::post('add_category', 'CategoryController@add_category');
        Route::get('all_category', 'CategoryController@all_category');
        Route::get('/edit_category/{id}', 'CategoryController@edit_category');
        Route::post('/update_category/{id}', 'CategoryController@update_category');
        Route::get('/delete_category/{id}', 'CategoryController@delete_category');

        //post
        Route::get('/get_posts', 'PostController@get_posts');
        Route::post('/create_post', 'PostController@create_post');
        Route::get('/edit_post/{id}', 'PostController@edit_post');
        Route::post('/update_post/{id}', 'PostController@update_post');
        Route::get('/delete_post/{id}', 'PostController@delete_post');
});
