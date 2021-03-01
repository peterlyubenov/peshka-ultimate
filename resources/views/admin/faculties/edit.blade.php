@extends('layouts.admin', ['title' => 'Редактиране на факултет', 'active' => 'faculties'])

@section('content')

<a href="{{ route('faculties.show', $faculty->id) }}" class="btn btn-primary btn-round"><i class="fa fa-chevron-left"></i> Назад</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">Редактиране на факултет "{{$faculty->title}}"</h4>
  </div>
  <div class="card-body">
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <form method="POST" action="{{ route('faculties.update', $faculty->id) }}">
      @csrf
      <input type="hidden" name="_method" value="PUT">
      <div class="form-group">
          <label>Име на факултет</label>
          <input type="text" name="title" class="form-control" placeholder="Име на факултет" value="{{ $faculty->title }}">
      </div>
        <button type="submit" class="btn btn-info btn-fill">Запазване</button>
        <div class="clearfix"></div>
    </form>
  </div>
</div>
@endsection