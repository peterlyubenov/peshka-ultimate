@extends('layouts.admin', ['title' => 'Специалности', 'active' => 'faculties'])

@section('content')

<a href="{{ route('majors.create') }}" class="btn btn-primary btn-round"><i class="fa fa-plus"></i> Добави нова специалност</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">Специалности</h4>
  </div>
  <div class="card-body">
    @foreach($majors as $major)
      <div><a href="{{ route('majors.show', $major->id) }}">{{ $major->name }} - {{ $major->faculty->title }}</a></div>
    @endforeach

    {{ $majors->links('vendor.pagination.bootstrap-4') }}
  </div>
</div>
@endsection