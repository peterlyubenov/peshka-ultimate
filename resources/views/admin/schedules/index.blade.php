@extends('layouts.admin', ['title' => 'Графици', 'active' => 'schedules'])

@section('content')

<a href="{{ route('schedules.create') }}" class="btn btn-primary btn-round"><i class="fa fa-plus"></i> Добави нов график</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">Графици</h4>
  </div>
  <div class="card-body">
    @foreach($schedules as $schedule)
      <div><a href="{{ route('schedules.show', $schedule->id) }}">{{ $schedule->major->name }} - {{ $schedule->year }} курс</a></div>
    @endforeach

    {{ $majors->links('vendor.pagination.bootstrap-4') }}
  </div>
</div>
@endsection