<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div class="sign-in">
	<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">
		<!-- Sign Up Image And Headings -->
		<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-5">Sign UP</h1>
				<p class="text-lg">Use these awesome forms to login or create new account in your project for free.</p>
		<!-- / Sign Up Image And Headings -->
		
		<!-- Sign Up Form -->
			<v-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form"
				@submit.prevent="handleSubmit"
			>
				<a-form-item class="mb-10">
					<label >Username</label>
					<a-input
					type="text"
					class="form-control"
					placeholder="username"
					v-model="username"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="email"
					v-model="email"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Nomor telfon</label>
					<a-input
					type="number"
					class="form-control"
					placeholder="nomor telfon"
					v-model="telfon"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-5">
					<label >password</label>
					<a-input
						label="Password"
						type="password"
						class="form-control"
						placeholder="Password"
						v-model="password"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label>Confirm Password</label>
					<a-input
					type="password"
					class="form-control"
					placeholder="confirm password"
					v-model="confirmPassword"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<a-switch v-model="rememberMe" /> Remember Me
				</a-form-item>

				<a-form-item>
					<a-button type="primary" block html-type="submit" class="login-form-button">
						SIGN UP
					</a-button>
				</a-form-item>
			</v-form>
			<p class="font-semibold text-muted text-center">Already have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign In</router-link></p>
		<!-- / Sign Up Form -->
		</a-col>
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin2.png" alt="">
			</a-col>
	</a-row>
	</div>
</template>

<script>

	export default {
		name:"Sign-Up",
		data() {
			return {
				username:'',
				email:'',
				telfon:'',
				password:'',
				confirmPassword:'',
				rememberMe: true,
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit() {
				const data ={
					username:this.username,
					email:this.email,
					telfon:this.telfon,
					password:this.password,
					confirmPassword:this.confirmPassword
				};
				// e.preventDefault();
				// this.form.validateFields((err, values) => {
				// 	if ( !err ) {
						console.log(data) ;
				
			}
		}
	}

</script>

<style lang="scss">
</style>