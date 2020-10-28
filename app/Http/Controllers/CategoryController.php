<?php

namespace App\Http\Controllers;

use App\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function add_category(Request $request)
    {
      Category::insert([
          'name' => $request->category_name,
          'created_at' => Carbon::now(),
      ]);

      return response()->json('success', 200);
    }

    public function all_category()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }


    public function edit_category($id)
    {
        $category = Category::where('id', $id)->first();
        return response()->json($category, 200);
    }

    public function update_category(Request $request, $id)
    {
        Category::where('id', $id)->update([
           'name' => $request->category_name,

        ]);

        return response()->json('success', 200);
    }

    public function delete_category($id)
    {
       Category::where('id', $id)->delete();
    }
}
