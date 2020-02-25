@if ($errors->any())
	<div class="alert custom-alert d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ $errors->first() }}
		</p>
		<i class="fal fa-times"></i>
	</div>
@elseif (session('error'))
	<div class="alert custom-alert d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ session('error')}}
		</p>
		<i class="fal fa-times"></i>
	</div>
@elseif (session('success'))
	<div class="alert custom-alert d-flex flex-row" role="alert">
		<p class="alert-description">
			{{ session('success') }}
		</p>
		<i class="fal fa-times"></i>
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
