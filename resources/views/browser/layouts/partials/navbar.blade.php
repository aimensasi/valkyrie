<nav class="navbar navbar-main navbar-expand-lg navbar-light {{ navbar_scroll_effect() }}">
  <div class="container">
    <a class="navbar-brand" href="#">
			<img class="dark-logo" style="display:none;" src="{{ asset('images/generic/logo-dark.png') }}" alt="Template Dark Logo">
      <img class="light-logo" style="display:block;" src="{{ asset('images/generic/logo-light.png') }}" alt="Template Light Logo">
    </a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#client-navbar-collapse" aria-controls="client-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="icon-bar top-bar"></span>
      <span class="icon-bar middle-bar"></span>
      <span class="icon-bar bottom-bar"></span>
    </button>

    <div class="collapse navbar-collapse" id="client-navbar-collapse">
      <div class="collapse-inner">
        <ul class="navbar-nav">
          <li class="nav-item">
          	<a class="nav-link home " href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
