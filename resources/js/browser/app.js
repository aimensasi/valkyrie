	require('./../bootstrap');


	/**
	 * Vue Setup
	 *
	 * Vue related setups are located below
	 */


	window.Vue = require('vue');
	window.Notifications = require('vue-notification').default;


	// local libraries


	setTimeout(function(){
		global.EventBus = new Vue();

		Vue.use(Notifications);


		const app = new Vue({
			el: '#vue__app__browser'
		});
	}, 1);
