<p align="center"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" width="400"></p>

<p align="center">
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
</p>


## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.


## About The Project

The Starter Project is created to provide The Techy Hub developers with starting point for working on new projects. This to help developer get started with new projects much faster without worring about the boilerplate setup. This also to ensure that all projects are following the same structure and setup.


## Main Features:

* Clean project Structure that support large projects
* Full authentication setup including ( multi-level authentication and password recovery )
* Custom dashboard setup for admin
* Custom artisan commands
* Custom Blade Helpers
* Custom Global Function Helpers


### Project Structure:

#### Admin

`Domain => admin.[domain].tth.asia`

```
API Controllers => App\Http\Controllers\Admin\[Resource]\API
Browser Controllers => App\Http\Controllers\Admin\[Resource]\Browser
```

```
Services => App\Services\Admin\[Services]\[ServicesClass]
```

```
Views => resource\views\Admin\[resource_view]\[function].blade.php
```

```
Styles => resource\sass\Admin
```

```
Javascript => resource\js\Admin
```

```
API Routes => routes\admin\web.php
```

```
Web Routes => routes\admin\api.php
```


#### Public

`Domain => [domain].tth.asia`

```
API Controllers => App\Http\Controllers\Public\[Resource]\API
Browser Controllers => App\Http\Controllers\Public\[Resource]\Browser
```

```
Services => App\Services\Public\[Services]\[ServicesClass]
```

```
Views => resource\views\Public\[resource_view]\[function].blade.php
```

```
Styles => resource\sass\Public
```

```
Javascript => resource\js\Public
```

```
API Routes => routes\public\web.php
```

```
Web Routes => routes\public\api.php
```


### About The Models

The models are moved into a directory inside the `app` directory called `Models`. The models directory helps in keeping all of our Models inside one directory instead of being placed in the `app` directory, which can get very messy.
