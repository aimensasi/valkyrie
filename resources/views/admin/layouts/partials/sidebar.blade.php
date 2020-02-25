<nav class="emcq-sidebar">
	<div class="inner">
		<ul class="sidebar-links">
			<li class="sidebar-nav-item">
				<a class="sidebar-nav-link fs-18 {{ active_route('admin.dashboard') }}" href="{{ route('admin.dashboard') }}">
					<i class="fal fa-home-lg-alt"></i>
					Dashboard
				</a>
			</li>
			@route_exists('admin.inquiries.index')
				<li class="sidebar-nav-item">
					<a class="sidebar-nav-link fs-18 {{ active_route('admin.inquiries.index') }}"
						href="{{ route('admin.inquiries.index') }}">
						<i class="fal fa-envelope-open-text"></i>
						Inquiries
					</a>
				</li>
			@endroute_exists
			<li class="sidebar-nav-item">
				<a class="sidebar-nav-link fs-18 {{ active_route('admin.profile') }}" href="{{ route('admin.profile') }}">
					<i class="fal fa-address-card"></i>
					Profile
				</a>
			</li>
			<li class="sidebar-nav-item">
				<a class="sidebar-nav-link fs-18" href="{{ route('admin.logout') }}">
					<i class="fal fa-sign-out"></i>
					Log Out
				</a>
			</li>
		</ul>
	</div>
</nav>
