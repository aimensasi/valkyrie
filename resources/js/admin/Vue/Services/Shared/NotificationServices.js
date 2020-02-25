
export default class NotificationServices extends Services {

	static index(context, { query, onSuccess, onError }){
		axios.get(route('admin.api.notifications.index', query))
		.then((response) => {
			NotificationServices.handle(context, response, onSuccess)
		 },({ response }) => {
			NotificationServices.handle(context, response, onError);
		});
	}

	static view(context, { onSuccess, onError }){
		axios.put(route('admin.api.notifications.view'))
		.then((response) => {
			NotificationServices.handle(context, response, onSuccess)
		 },({ response }) => {
			NotificationServices.handle(context, response, onError);
		});
	}

	static read(context, { id, onSuccess, onError }){
		axios.put(route('admin.api.notifications.read', id))
		.then((response) => {
			NotificationServices.handle(context, response, onSuccess)
		 },({ response }) => {
			NotificationServices.handle(context, response, onError);
		});
	}
}
