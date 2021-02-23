@extends('layouts.admin', ['title' => 'Факултети', 'active' => 'faculties'])

@section('content')

<a href="{{ route('faculties.create') }}" class="btn btn-primary btn-round"><i class="fa fa-plus"></i> Добави нов факултет</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">Факултети</h4>
  </div>
  <div class="card-body">
    @foreach($faculties as $faculty)
      <div><a href="{{ route('faculties.show', $faculty->id) }}">{{ $faculty->title }}</a></div>
    @endforeach

    {{ $faculties->links('vendor.pagination.bootstrap-4') }}
  </div>
</div>
@endsection