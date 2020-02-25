@extends('browser.layouts.partials.main')

@section('master')
	<div class="auth-wrapper">
    <div class="auth-row">
      <div class="auth-col left-col order-2 order-md-1">
        <img class="logo-sliced" src="{{ asset('images/auth/logo-sliced.png') }}" alt="Logo">
        <div class="auth-content not-form">
          <h2 class="fs-30 lp-25">Welcome to Template</h2>
          <p class="fs-18 lp-25">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#" class="cta fs-15 lp-25">
            Know More
          </a>
        </div>
      </div>
      <div class="auth-col right-col order-1 order-md-2">
        <div class="auth-content form">
          @yield('content')
        </div>
      </div>
    </div>
  </div>
@endsection
