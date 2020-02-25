@extends('browser.layouts.partials.main')

@section('master')
  {{-- @include('browser.layouts.partials.navbar') --}}
   {{-- @include('browser.layouts.partials.notification') --}}
    @yield('content')
  @include('browser.layouts.partials.footer')
@endsection
