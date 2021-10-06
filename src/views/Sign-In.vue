<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div class="sign-in">
		
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">Sign In</h1>
				<h5 class="font-regular text-muted">Enter your email and password to sign in</h5>
				
				<div class="desc" status="error" v-for="(error, index) in errors" :key="index">
					<p><a-icon :style="{ color: 'red' }" type="close-circle" /> {{ error[0] }}</p>
				</div>
				<!-- Sign In Form -->
				<a-form
					id="components-form-demo-normal-login"
					class="login-form"
					@submit.prevent="userLogin"
					:hideRequiredMark="true"
				>
				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="email"
					v-model="form.email"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-5">
					<label >Password</label>
					<a-input
						label="Password"
						type="password"
						class="form-control"
						placeholder="Password"
						v-model='form.password'
					>
					</a-input>
					<a-button type="primary" block html-type="submit" class="login-form-button">
						SIGN IN
					</a-button>
				</a-form-item>
				</a-form>
				<!-- / Sign In Form -->

				<p class="font-semibold text-muted">Don't have an account?
					<router-link to="/sign-up" class="font-bold text-dark">Sign Up</router-link></p>
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin2.png" alt="">
			</a-col>
			<!-- Sign In Image Column -->

		</a-row>
		
	</div>
</template>

<script>

	export default {
		name:"Sign-In",
		data() {
			return {
				form: {
				email: '',
				password: '',
				},
				errors: null
			}
		},
		methods: {
			
			userLogin () {
				this.$store.dispatch('login', this.form)
				.then(response => {
				this.$router.push({name: 'Home'})
				}).catch(error => {
					this.errors = error
				})
			},
			
			
			
		}
	}

</script>

<style lang="scss">
	body {
		background-color: #ffffff;
	}
</style>