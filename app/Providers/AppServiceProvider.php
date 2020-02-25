<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider{

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register(){

  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot(){
		if (App::environment(['staging', 'production'])) {
			URL::forceScheme('https');
		}
    Schema::defaultStringLength(191);

		// register custom blade directives
		$this->registerCustomDirectives();
  }

	/**
	*	register custom blade directives
	*
	* add your own custom blade directives functions here
	*
	**/
	public function registerCustomDirectives(){
		$this->registerAppNameDirective();
		$this->registerRouteDirective();
	}

	/**
	*	Register get application name directive
	*
	* can be used in blade by @appname
	**/
	public function registerAppNameDirective(){
		Blade::directive('app_name', function () {
      return config('app.name');
    });
	}

	/**
	*	Register the route_exists directive
	*
	* this helps in finding out if a route exists
	* useful when using module routes that may not exist
	* because the module is disabled
	**/
	public function registerRouteDirective(){
		Blade::if('route_exists', function($name){
			return Route::has($name);
		});
	}
}
