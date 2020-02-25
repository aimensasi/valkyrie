@extends('admin.layouts.partials.main')

@section('master')
	@include('admin.layouts.partials.navbar')
	<notification-component></notification-component>
	<v-dialog></v-dialog>
	@include('admin.layouts.partials.notification')
	<main class="logged-in">
		<section class="main-left">
			@include('admin.layouts.partials.sidebar')
		</section>
		<section class="main-right">
			@yield('content')
		</section>
	</main>
	@include('admin.layouts.partials.footer')
@endsection
