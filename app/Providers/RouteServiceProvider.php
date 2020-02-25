<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider{

	/**
	* The path to the "home" route for your application.
	*
	* @var string
	*/
	public const HOME = '/';


	/**
   * This namespace is applied to your controller routes.
   *
   * In addition, it is set as the URL generator's root namespace.
   *
   * @var string
   */
  protected $browser_namespace = 'App\Http\Controllers\Browser';

	/**
	 * This namespace is applied to admin controller routes.
	 *
	 *
	 * @var string
	 */
	protected $admin_namespace = 'App\Http\Controllers\Admin';


  /**
   * Define your route model bindings, pattern filters, etc.
   *
   * @return void
   */
  public function boot(){
    parent::boot();
  }

  /**
   * Define the routes for the application.
   *
   * @return void
   */
  public function map(){
		$this->mapAdminRoutes();
		$this->mapBrowserRoutes();
  }


	/**
	 * Define the "admin" routes for the application.
	 *
	 *
	 * @return void
	 */
	protected function mapAdminRoutes(){
		// web routes accessed by using the browser directly
		Route::domain($this->domain("admin"))
			->name('admin.')
			->middleware('web')
			->namespace($this->admin_namespace)
			->group(base_path('routes/admin/web.php'));

		// api routes accessed by using axios from same application
		Route::domain($this->domain("admin"))
			->prefix('api')
			->name('admin.api.')
			->middleware('web')
			->namespace($this->admin_namespace)
			->group(base_path('routes/admin/api.php'));
	}

	/**
	 * Define the "admin" routes for the application.
	 *
	 *
	 * @return void
	 */
	protected function mapBrowserRoutes(){
		Route::middleware('web')
			->name('browser.')
      ->namespace($this->browser_namespace)
      ->group(base_path('routes/browser/web.php'));


		Route::domain($this->domain("api"))
			->name('browser.api.')
			->middleware('api')
			->namespace($this->browser_namespace)
			->group(base_path('routes/browser/api.php'));
	}


	private function domain(string $subdomain = ''){
    if (strlen($subdomain) > 0) {
      $subdomain = "{$subdomain}.";
    }

    return config('app.domain_prefix') . $subdomain . config('app.domain');
  }
}
