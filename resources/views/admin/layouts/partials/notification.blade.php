@if ($errors->any())
	<div class="alert main-alert danger d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ $errors->first() }}
		</p>
		<i class="fal fa-times action-icon-close my-auto"></i>
	</div>
@elseif (session('error'))
	<div class="alert main-alert danger d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ session('error')}}
		</p>
		<i class="fal fa-times action-icon-close my-auto"></i>
	</div>
@elseif (session('success'))
	<div class="alert main-alert success d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ session('success') }}
		</p>
		<i class="fal fa-times action-icon-close my-auto"></i>
	</div>
@endif


@push('scripts')
	<script type="text/javascript">
		$().ready(function(){
			$('.action-icon-close').on('click', function(e){
				$(this).parent().addClass('hidden');
			});
		});
	</script>
@endpush
