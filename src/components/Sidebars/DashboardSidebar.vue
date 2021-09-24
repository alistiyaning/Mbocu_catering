<template>
	
	<!-- Main Sidebar -->
	<a-layout-sider
		collapsible
		class="sider-primary"
		breakpoint="lg"
		collapsed-width="0"
		width="250px"
		:collapsed="sidebarCollapsed"
		@collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
		:trigger="null"
		:class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
		theme="light"
		:style="{ backgroundColor: 'transparent',}">
			<div class="brand"><img src="images/logo-mbocu.png" alt=""> <span></span></div>
			<hr>

			<!-- Sidebar Navigation Menu -->
			<a-menu theme="light" mode="inline">
				<a-menu-item>
					<router-link to="/dashboard">
						<span class="icon">
							<a-icon type="home" theme="filled" :style="{ fontSize: '16px',}" class="m-0"/>
						</span>
						<span class="label">Dashboard</span>
					</router-link>
				</a-menu-item>
				<a-menu-item  v-if="user.role == 'admin'">
					<router-link to="/super_item">
						<span class="icon">
							<a-icon type="book" theme="filled" :style="{ fontSize: '16px',}" class="m-0"/>
						</span>
						<span class="label">Item</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.role == 'admin'">
					<router-link to="/super_user">
						<span class="icon">
							<a-icon type="team"  :style="{ fontSize: '16px',}" class="m-0"/>
						</span>
						<span class="label">User</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.role == 'admin'">
					<router-link to="/super_merchant">
						<span class="icon">
							<a-icon type="skin" theme="filled" :style="{ fontSize: '16px',}" class="m-0"/>
						</span>
						<span class="label">Merchant</span>
					</router-link>
				</a-menu-item>
				<a-menu-item v-if="user.role == 'merchant'">
					<router-link to="/merchant_Item">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z" fill="#111827"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Item</span>
					</router-link>
				</a-menu-item>
				
				<a-menu-item class="menu-item-header">
					Account Pages
				</a-menu-item>
				<a-menu-item>
					<router-link to="/profile">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="#111827"/>
							</svg>
						</span>
						<span class="label">Profile</span>
					</router-link>
				</a-menu-item>
				<a-menu-item>
					<a @click="logout">
						<span class="icon">
							<a-icon type="logout"  :style="{ fontSize: '16px',}" class="m-0"/>
						</span>
						<span class="label">Logout</span>
					</a>
				</a-menu-item>
				
			</a-menu>
			<!-- / Sidebar Navigation Menu -->


	</a-layout-sider>
	<!-- / Main Sidebar -->

</template>

<script>
	import { mapGetters } from 'vuex'
	export default ({
		methods: {
			logout: function() {
			this.$store.dispatch("logout").then(() => {
			this.$router.push("/sign-in");
			});
		},
		},
		computed: {
			 ...mapGetters({ 
				isLoggedIn: 'isLoggedIn',
				user: 'user',
			}),
		},
		props: {
			// Sidebar collapsed status.
			sidebarCollapsed: {
				type: Boolean,
				default: false,
			},
			
			// Main sidebar color.
			sidebarColor: {
				type: String,
				default: "primary",
			},
			
			// Main sidebar theme : light, white, dark.
			sidebarTheme: {
				type: String,
				default: "light",
			},
		},
		data() {
			return {
				// sidebarCollapsedModel: this.sidebarCollapsed,
			}
		},
	})

</script>
