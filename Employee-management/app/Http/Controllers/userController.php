<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class userController extends Controller
{
    public function register(Request $request){
        try {
          $reg_user['name']=$request->name;
        $reg_user['email']=$request->email;
        $reg_user['password']=$request->password;

        $data =User::create($reg_user);
        return "success";
        
        } catch (\Throwable $th) {
           return $th;
        }
        
        
        }

        public function login(Request $request){
            try {
            
            $log_user['email']=$request->email;
            $log_user['password']=$request->password;

            

            
            // dd($log_user);
            
            if(Auth::attempt($log_user)){
                $user = Auth::user();
                $token = $user->createToken('myApp')->plainTextToken;
                return response()->json(["token"=>$token] , 200);
            }else{
                return response()->json(["msg" => "login fail"] , 401);
            }
    
            
            
            } catch (\Throwable $th) {
               return $th;
            }
            
            
            }
}
