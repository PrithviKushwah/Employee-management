<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Node\Expr\FuncCall;
use App\Models\Employee;

class employeeController extends Controller
{

    public function getemployee(){
        $getdata = Employee::get();
        return response()->json(["msg"=> $getdata] , 200);
    }


    public function addemployee(Request $request) {
        $postdata['name']= $request->name;
        $postdata['age']= $request->age; 
        $postdata['hobby']= $request->hobby; 
        $postdata['skills']= $request->skills; 

        Employee::create($postdata);
        return response()->json(["msg"=> $postdata] , 200 );

    }

    public function getoneemployee(Request $request , $id){
        $getdata = Employee::where('id' , $id)->first();
        return response()->json(["data"=>$getdata]);
    }

    public function deleteoneemployee(Request $request , $id){
        $deledata = Employee::where('id' , $id)->first()->delete();

        return response()->json(["data"=>$deledata]);
    }
        
    }
