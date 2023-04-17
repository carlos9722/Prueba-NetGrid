<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index($id)
    {

        /*  $favoritos = Favorite::findAll(2);

        return response()->json($favoritos); */

        $favoritos = Favorite::where('id_usuario', $id)->get();

        return response()->json($favoritos);
    }

    public function store(Request $request)
    {
        $favorito = Favorite::create($request->all());

        return response()->json($favorito, 201);
    }

    public function show(Favorite $favorito)
    {
        $favorito->load('user');

        return response()->json($favorito);
    }

    public function update(Request $request, Favorite $favorito)
    {
        $favorito->update($request->all());

        return response()->json($favorito);
    }

    public function destroy($id)
    {
        $favoritos = Favorite::find($id);

        if (!$favoritos) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $favoritos->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
