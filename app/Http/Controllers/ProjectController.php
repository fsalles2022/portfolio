<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Project;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return "Projetos";
        return Inertia::render('Projects/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $skills = skill::all();
        return Inertia::render('Projects/Create', compact('skills'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd ($request);
        $request->validate([
            'image' => ['required', 'image'],
            'name' => ['required', 'min:3'],
            'skill_id' => ['required']

        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('projects');
            Project::create(
                [
                    'image' => $image,
                    'name' => $request->name,
                    'skill_id' => $request->skill_id,
                    'project_url' => $request->project_url,
                ]
            );
            return redirect()->route('projects.index')->with('message', 'Projeto criado com sucesso!');
        }
        return Redirect::back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
