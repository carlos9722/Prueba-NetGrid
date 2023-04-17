<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');


        if (Auth::guard('api')->attempt($credentials)) {
            $user = Auth::guard('api')->user();
            $jwt = JWTAuth::attempt($credentials);
            $succes = true;
            $data = compact('user');
            return compact('succes', 'data', 'jwt');
        } else {
            $succes = false;
            $message = 'Credenciales incorrectas';
            return compact('succes', 'message');
        }
    }
    public function logout() {
        Auth::guard('api')->logout();
        $succes = true;
        return compact('succes');
    }
}
