<?php

namespace App\Http\Controllers;

use App\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add_category(Request $request )
    {
        // $this->validate($request,[
        //    'category_name' => 'required|min:2|max:50'
        // ]);
        Category::insert([
            'name' => $request->category_name,
            'created_at' => Carbon::now(),
        ]);

        return response()->json('success', 200);
    }

    public function all_category()
    {
        $categories = Category::all();
        return response()->json([
            'categories'=>$categories
        ],200);

    }
}
