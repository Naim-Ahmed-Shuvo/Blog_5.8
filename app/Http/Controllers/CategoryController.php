<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function add_category(Request $request)
    {
      Category::insert([
          'name' => $request->category_name,
      ]);

      return response()->json('success', 200);
    }

    public function all_category()
    {
        $categories = Category::paginate(4);
        return response()->json($categories, 200);
    }

    public function edit_category($id)
    {
        $category = Category::where('id', $id)->first();
         return response()->json($category, 200);
    }
}
