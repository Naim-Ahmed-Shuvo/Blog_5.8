<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
class PostController extends Controller
{

    public function create_post(Request $request)
    {
        // image proceening
        $strpos = strpos($request->photo,';');
        $sub = substr($request->photo,0,$strpos);
        $ex = explode('/',$sub)[1];
        $name = time().".".$ex;
        $img = Image::make($request->photo)->resize(200, 200);
        $upload_path = public_path()."/post_img/";
        $img->save($upload_path.$name);

        // $get_img = $request->file('photo');
        // $img_name = time().'.'.$get_img->getClientOriginalExtension();
        // Image::make($get_img)->save('post_img/'.$img_name, 100);

        Post::insert([
            'title' => $request->title,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'photo' => $name,
            'user_id' => Auth::user()->id,
        ]);

    }
    public function get_posts()
    {
        $posts = Post::all();

        return response()->json($posts, 200);
    }

    public function edit_post($id)
    {

        $post = Post::where('id', $id)->first();
        return response()->json($post, 200);
    }

    public function update_post(Request $request, $id)
    {
        $post = Post::find($id);
        if($request->photo!=$post->photo){
            $strpos = strpos($request->photo,';');
            $sub = substr($request->photo,0,$strpos);
            $ex = explode('/',$sub)[1];
            $name = time().".".$ex;
            $img = Image::make($request->photo)->resize(200, 200);
            $upload_path = public_path()."/post_img/";
            $image = $upload_path. $post->photo;
            $img->save($upload_path.$name);

            if(file_exists($image)){
                @unlink($image);
            }
        }else{
            $name = $post->photo;
        }

        $post->title = $request->title;
        $post->description = $request->description;
        $post->category_id = $request->category_id;
        $post->user_id = Auth::user()->id;
        $post->photo = $name;
        $post->save();

    }

    public function delete_post($id)
    {
        $post = Post::where('id', $id)->first();
        if($post->photo != null){
            unlink('post_img/'.$post->photo);
        }

        Post::find($id)->delete();
    }
}
