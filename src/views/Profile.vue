<!-- 
	This is the user profile page, it uses the dashboard layout in: 
	"./layouts/Dashboard.vue" .
 -->

<template>
	<div>

		<!-- Header Background Image -->
		<div class="profile-nav-bg" style="background-image: url('images/bg-profile.jpg')"></div>
		<!-- / Header Background Image -->

		<!-- User Profile Card -->
		<a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
			<template #title>
				<v-form
				id="components-form-demo-normal-login"
				class="login-form"
				@submit.prevent="register"
				>
				<a-row type="flex" align="middle">
					<a-col :span="24" :md="12" class="col-info">
						<a-avatar :size="74" shape="square" src="images/face-1.jpg" />
						<div class="avatar-info">
							<h4 class="font-semibold m-0">{{user.name}}</h4>
							<p>{{user.role}}</p>
						</div>
					</a-col>
					<a-col :span="12" :md="12" class="col-info">
						<div class="avatar-info">
							<p>Nomor Telepon : +62 {{user.phone_num}}</p>
							<p>Jenis Kelamin : {{user.gender}}</p>
							<p>Ulang Tahun : {{user.birthday}}</p>
						</div>
					</a-col>
				</a-row>
				</v-form>
			</template>
		</a-card>
		<!-- User Profile Card -->

	</div>
</template>

<script>

	

	import { mapGetters } from 'vuex'
	export default ({
		computed: {
			 ...mapGetters({ 
				isLoggedIn: 'isLoggedIn',
				user: 'user',
			}),
		},
		data() {
			return {
				name:'',
				email:'',
				phone_num:'',
				password:'',
				gender:'',
				birthday:'',
			}
		},
	})

</script>

<style lang="scss">
</style>