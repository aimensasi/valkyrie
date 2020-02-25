	require('./../bootstrap');


	require('@vendor/scripts/plugins/bootstrap-datetimepicker');


	/**
	 * Vue Setup
	 *
	 * Vue related setups are located below
	 */

	window.Vue = require('vue');
	window.Notifications = require('vue-notification').default;
	window.ToggleButton = require('vue-js-toggle-button').default;
	window.VSelect = require("vue-select").default;
	window.VModal = require('vue-js-modal').default;
	window.VTable = require("tth-vue-table").default;


	// local libraries
	window.UUID = require('@vendor/scripts/UUID.js').default;
	window.Utility = require('@vendor/scripts/Utility').default;
	window.Services = require('@vendor/scripts/Services').default;
	window.Notify = require('@vendor/scripts/Notification').default;
	window.DateTimePicker = require('@vendor/scripts/DateTimePicker').default;


	setTimeout(function(){
		global.EventBus = new Vue();

		Vue.use(Notifications);
		Vue.use(ToggleButton);
		Vue.use(VTable);
		Vue.component('v-select', VSelect);
		Vue.use(VModal, { dialog: true });
		Vue.filter('truncate', Utility.truncate);

		// vendor components
		Vue.component(
			'notification-component',
			require('@vendor/Vue/Directives/Notifications/NotificationComponent.vue').default
		);

		Vue.component(
			'fyre-component',
			require('@vendor/Vue/Directives/FyreComponents/FyreComponent.vue').default
		);

		// admin components
		Vue.component(
			'notification-container',
			require('@admin/Vue/Components/NotificationsContainer/NotificationContainer.vue').default
		);

		Vue.component(
			'dashboard-component',
			require('@admin/Vue/Components/DashboardComponents/DashboardComponent.vue').default
		);

		const app = new Vue({
			el: '#vue__app__admin'
		});
	}, 1);
