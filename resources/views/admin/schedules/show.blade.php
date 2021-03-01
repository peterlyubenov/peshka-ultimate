@extends('layouts.admin', ['title' => $major->name, 'active' => 'faculties'])

@section('content')

<a href="{{ route('majors.index') }}" class="btn btn-primary btn-round"><i class="fa fa-chevron-left"></i> Назад</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">{{ $major->name }}</h4>
  </div>
  <div class="card-body">
    <a href="{{ route('majors.edit', $major->id) }}" class="btn btn-primary btn-rounded"><i class="fa fa-pencil"></i> Edit</a>
    <a href="{{ route('majors.delete', $major->id) }}" class="btn btn-danger btn-rounded"><i class="fa fa-trash"></i></a>
  </div>
</div>
@endsection