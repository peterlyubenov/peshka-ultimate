@extends('layouts.admin', ['title' => $faculty->title, 'active' => 'faculties'])

@section('content')

<a href="{{ route('faculties.index') }}" class="btn btn-primary btn-round"><i class="fa fa-chevron-left"></i> Назад</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">{{ $faculty->title }}</h4>
  </div>
  <div class="card-body">

    <div class="my-5">
      <div class="mb-3">
        <span class="h4">Изберете специалност</span>
        <a href="{{ route('majors.create') }}" class="pl-2" style="font-size: 12px">(или създайте нова)</a>
      </div>
      @if(count($majors) == 0)
      <p>В този факултет не са зададени специалности</p>
      @endif
      @foreach($majors as $major)
        <div>
          <a href="{{ route('majors.show', $major->id) }}">{{$major->name}}</a>
        </div>
      @endforeach
    </div>

    <a href="{{ route('faculties.edit', $faculty->id) }}" class="text-secondary"><i class="fa fa-pencil"></i> Редактиране на факултет</a>
    <a href="{{ route('faculties.delete', $faculty->id) }}" class="text-danger ml-4"><i class="fa fa-trash"></i> Изтриване на факултет</a>
  </div>
</div>
@endsection