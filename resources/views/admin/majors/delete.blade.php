@extends('layouts.admin', ['title' => 'Изтриване на специалност', 'active' => 'faculties'])

@section('content')

<a href="{{ route('majors.index') }}" class="btn btn-primary btn-round"><i class="fa fa-chevron-left"></i> Назад</a>

<div class="card my-4 p-5 bg-light">
  <div class="card-header bg-light">
    <h4 class="card-title fs-1 fw-bold">Сигурни ли сте, че искате да изтриете {{ $major->name }}?</h4>
  </div>
  <div class="card-body">
    <p>След изтриване, записа не може да се възстанови. Всички графици свързани с нея също ще бъдат изтрити!</p>
    <form action="{{ route('majors.destroy', $major->id) }}" method="POST">
      @csrf

      <input type="hidden" name="_method" value="delete">

      <div class="mt-5">
        <button type="submit" class="btn btn-danger btn-rounded">Изтрий</button>
        <a href="{{ route('majors.show', $major->id) }}" class="text-primary" style="margin-left: 1em">Назад</a>
      </div>
    </form>
  </div>
</div>
@endsection