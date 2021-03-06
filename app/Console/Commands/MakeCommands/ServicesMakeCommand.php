<?php

namespace App\Console\Commands\MakeCommands;

use Illuminate\Support\Str;
use InvalidArgumentException;
use Symfony\Component\Console\Input\InputOption;
use Illuminate\Console\GeneratorCommand as Command;

class ServicesMakeCommand extends Command{

	/**
   * The console command name.
   *
   * @var string
   */
  protected $signature = 'make:service {name : The name of the service to create.}
	{--m|model= : Generate a resource service for the given model.}
	{--p|parent= : Generate a nested resource service class.}
	{--r|resource= : Generate a resource service class.}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create a new service class';

  /**
   * The type of class being generated.
   *
   * @var string
   */
  protected $type = 'Service';

  /**
   * Get the stub file for the generator.
   *
   * @return string
   */
  protected function getStub(){
		$stub = null;

		if ($this->option('parent')) {
				$stub = '/service.stub.parent.stub';
		} elseif ($this->option('model')) {
				$stub = '/service.stub.model.stub';
		} elseif ($this->option('resource')) {
				$stub = '/service.stub';
		}

		$stub = $stub ?? '/service.plain.stub';

		return __DIR__ . '/stubs/services' . $stub;
  }

	/**
	 * Get the default namespace for the class.
	 *
	 * @param  string  $rootNamespace
	 * @return string
	 */
	protected function getDefaultNamespace($rootNamespace){
		return $rootNamespace.'\Services';
	}

	/**
	 * Build the class with the given name.
	 *
	 * Remove the base controller import if we are already in base namespace.
	 *
	 * @param  string  $name
	 * @return string
	 */
	protected function buildClass($name){
		$serviceNamespace = $this->getNamespace($name);
		$replace = [];

		if ($this->option('parent')) {
			$replace = $this->buildParentReplacements();
		}

		if ($this->option('model')) {
			$replace = $this->buildModelReplacements($replace);
		}


		return str_replace(
			array_keys($replace), array_values($replace), parent::buildClass($name)
		);
	}

	/**
	 * Build the replacements for a parent controller.
	 *
	 * @return array
	 */
	protected function buildParentReplacements(){
		$parentModelClass = $this->parseModel($this->option('parent'));

		if (! class_exists($parentModelClass)) {
			if ($this->confirm("A {$parentModelClass} model does not exist. Do you want to generate it?", true)) {
				$this->call('make:model', ['name' => $parentModelClass]);
			}
		}

		return [
			'ParentDummyFullModelClass' => $parentModelClass,
			'ParentDummyModelClass' => class_basename($parentModelClass),
			'ParentDummyModelVariable' => lcfirst(class_basename($parentModelClass)),
			'ParentDummyModelPlural' => Str::plural(lcfirst(class_basename($parentModelClass))),
		];
	}

	/**
	 * Build the model replacement values.
	 *
	 * @param  array  $replace
	 * @return array
	 */
	protected function buildModelReplacements(array $replace){
		$modelClass = $this->parseModel($this->option('model'));

		if (! class_exists($modelClass)) {
			if ($this->confirm("A {$modelClass} model does not exist. Do you want to generate it?", true)) {
				$this->call('make:model', ['name' => $modelClass]);
			}
		}

		return array_merge($replace, [
			'DummyFullModelClass' => $modelClass,
			'DummyModelClass' => class_basename($modelClass),
			'DummyModelVariable' => lcfirst(class_basename($modelClass)),
			'DummyModelPlural' => Str::plural(lcfirst(class_basename($modelClass))),
		]);
	}

	/**
	 * Get the fully-qualified model class name.
	 *
	 * @param  string  $model
	 * @return string
	 *
	 * @throws \InvalidArgumentException
	 */
	protected function parseModel($model){
		if (preg_match('([^A-Za-z0-9_/\\\\])', $model)) {
			throw new InvalidArgumentException('Model name contains invalid characters.');
		}

		$model = trim(str_replace('/', '\\', $model), '\\');

		if (! Str::startsWith($model, $rootNamespace = $this->laravel->getNamespace())) {
			$model = $rootNamespace . 'Models\\' . $model;
		}

		return $model;
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions(){
		return [
			['model', 'm', InputOption::VALUE_OPTIONAL, 'Generate a resource controller for the given model.'],
			['parent', 'p', InputOption::VALUE_OPTIONAL, 'Generate a nested resource controller class.'],
			['resource', 'r', InputOption::VALUE_NONE, 'Generate a resource controller class.'],
		];
	}
}
