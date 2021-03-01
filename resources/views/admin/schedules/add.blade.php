@extends('layouts.admin', ['title' => 'Създаване на специалност', 'active' => 'faculties'])

@section('content')

<a href="{{ route('majors.index') }}" class="btn btn-primary btn-round"><i class="fa fa-chevron-left"></i> Назад</a>

<div class="card my-4">
  <div class="card-header">
      <h4 class="card-title">Създаване на специалност</h4>
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
    <form method="POST" action="{{ route('majors.store') }}">
      @csrf
      <div class="form-group">
          <label>Име на специалност</label>
          <input type="text" name="name" class="form-control" placeholder="Име на специалност" value="">
      </div>
      <div class="form-group">
          <label>Факултет</label>
          <select class="custom-select form-control" aria-label="Факултет" name="faculty">
            <option selected>Изберете факултет</option>
            @foreach($faculties as $faculty)
              <option value="{{ $faculty->id }}">{{$faculty->title}}</option>
            @endforeach
          </select>
      </div>
        <button type="submit" class="btn btn-info btn-fill">Запазване</button>
        <div class="clearfix"></div>
    </form>
  </div>
</div>
@endsection