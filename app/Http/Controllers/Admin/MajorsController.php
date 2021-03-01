<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Major;
use App\Models\Faculty;

class MajorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.majors.index')->with('majors', Major::paginate(15));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $faculties = Faculty::all();
        return view('admin.majors.add')->with('faculties', $faculties);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255|min:3',
            'faculty'=> 'required|integer|min:1'
        ]);

        $major = new Major();
        $major->name = $validated['name'];
        $major->faculty_id = $validated['faculty'];
        $major->save();

        return redirect()->route('majors.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('admin.majors.show')->with('major', Major::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.majors.edit')->with('major', Major::find($id))->with('faculties', Faculty::all());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|max:255|min:3',
            'faculty'=> 'required|integer|min:1'
        ]);

        $major = Major::find($id);
        $major->name = $validated['name'];
        $major->faculty_id = $validated['faculty'];
        $major->save();

        return redirect()->route('majors.show', $id);
    }

    public function delete($id) 
    {
        return view('admin.majors.delete')->with('major', Major::find($id)); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $major = Major::find($id);
        $faculty = $major->faculty;
        $major->delete();
        
        return redirect()->route('faculties.show', $faculty->id);
    }
}
