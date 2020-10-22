<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
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
    return view('welcome');
});

Auth::routes();
// Route::get('{path}','HomeController@index')->where( 'path', '[\/\w\.-]*' );
// Route::get('/{anypath}','HomeController@index')->where('path','.*');
Route::post('add_category', 'CategoryController@add_category');
Route::get('all_category', 'CategoryController@all_category');
Route::get('edit_category/{id}', 'CategoryController@edit_category');
