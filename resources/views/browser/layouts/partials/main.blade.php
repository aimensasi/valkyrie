<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
	  @include('browser.layouts.partials.meta')
	</head>
	<body>
		<div id="vue__app__browser" class="position-relative">
			@yield('master')
		</div>

		@include('browser.layouts.partials.scripts')
	</body>
</html>
