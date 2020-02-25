<template>
	<div class="notify-container">
		<a class="notify-toggle" @click="onToggle">
			<i class="fal fa-globe-americas fa-lg"></i>
			<span class="has-notification" v-if="hasNew"></span>
		</a>
		<div class="notify-menu" v-if="isOpen" v-on-clickaway="onFocusLost">
			<a class="notify-menu-item"
				v-for="notification in notifications"
				:key="notification.id"
				:class="{ unread: !notification.read_at, clickable: notification.link }"
				@click="onSelect($event, notification)">
				<span class="menu-text">{{ notification.message }}</span>
				<span class="menu-text time">{{ notification.received_on }}</span>
			</a>

			<a class="notify-menu-item empty"
				v-if="notifications.length == 0">
				<span class="menu-text">All clear, no notifications for you.</span>
			</a>
		</div>
	</div>
</template>

<script>
	import NotificationServices from '@admin/Vue/Services/Shared/NotificationServices';

	import { directive as onClickaway } from 'vue-clickaway';

	export default {
		props: {},
		directives: {
			onClickaway: onClickaway,
		},
		data: function(){
			return {
				notifications: [],
				isOpen: false,
				hasNew: false,
			}
		},
		mounted(){
			this.setDefaults();
		},
		methods: {
			setDefaults: function(){
				NotificationServices.index(this, { onSuccess: ({ data }) => {
					this.notifications = data.rows;
					let hasNew = _.filter(this.notifications, (n) => { return !n.viewed_at; });

					if(_.isEmpty(hasNew)){
						this.hasNew = false;
					}else{
						this.hasNew = true;
					}
				}});
			},
			MarkAsViewed: function(){
				if(!this.hasNew){
					return;
				}

				NotificationServices.view(this, { onSuccess: ({ data }) => {
					this.hasNew = false;
				}});
			},
			onToggle: function(e){
				e.preventDefault();
				this.isOpen = !this.isOpen;
				if(this.isOpen){
					this.MarkAsViewed();
				}
			},
			onFocusLost: function(e){
				e.preventDefault();
				this.isOpen = false;
			},
			onSelect: function(e, notification){
				if(!notification.link || notification.read_at){
					return;
				}

				NotificationServices.read(this, { id: notification.id, onSuccess: ({ data }) => {
					location.href = notification.link;
				}});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notify-container{
		position: relative;
		margin-left: 20px;
    margin-top: 10px;

		.notify-toggle{
			position: relative;
			cursor: pointer;
			i{
				font-size: 1.7em;
			}
			.has-notification{
				background: #ff5a5f;
		    width: 10px;
		    height: 10px;
		    position: absolute;
		    border-radius: 10px;
		    top: -6px;
		    right: -2px;
			}
		}
		.notify-menu{
			position: absolute;
	    top: 62px;
	    left: -7px;
	    z-index: 9999;
	    background: white;
	    overflow-y: scroll;
	    min-height: 50px;
	    max-height: 400px;
	    min-width: 450px;
	    border-radius: 7px;
	    border: 1px solid #d0d0d0d4;
	    box-shadow: -3px 10px 9px #d0d0d0;
	    border-top: none;
			&::before{
      }
			.notify-menu-item{
				border-bottom: 1px solid #c7c5c5;
		    border-radius: 3px;
		    width: 100%;
		    cursor: default;
		    padding: 0.7rem 0.7rem;
				flex-direction: column;
				display: flex;
				&.clickable{
					cursor: pointer;
				}
				&.empty{
					border-bottom: none;
					text-align: center;
					text-transform: uppercase;
				}

				&:hover, &:focus, &:active{
          background-color: rgb(234, 234, 243);
        }
				.menu-text{
					color: #2b2b2b;
					font-size: 0.9rem;
					text-overflow: ellipsis;
					overflow: hidden;
					margin-bottom: 0.25rem;
					&.time{
						font-size: 0.7rem;
					}
				}
			}
		}
	}
</style>
