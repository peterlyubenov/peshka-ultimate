@extends('layouts.base-panel', ['header' => "Peshka Admin", 'title' => $title])

@section('sidenav')
<li class="nav-item {{ $active == 'dashboard' ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('admin.index') }}">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Табло</p>
    </a>
</li>
<li class="nav-item {{ $active == 'faculties' ? 'active' : '' }}">
    <a class="nav-link" href="{{ route('faculties.index') }}">
        <i class="nc-icon nc-single-copy-04"></i>
        <p>Графици</p>
    </a>
</li>
<li class="nav-item {{ $active == 'users' ? 'active' : '' }}">
    <a class="nav-link" href="./user.html">
        <i class="nc-icon nc-single-02"></i>
        <p>Потребители</p>
    </a>
</li>
@endsection