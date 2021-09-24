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
				
		<!-- / Sign Up Image And Headings -->
		<div class="desc" status="error" v-for="(error, index) in errors" :key="index">
			<p><a-icon :style="{ color: 'red' }" type="close-circle" /> {{ error[0] }}</p>
		</div>
		<!-- Sign Up Form -->
			<v-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form"
				@submit.prevent="register"
			>
				<a-form-item class="mb-10">
					<label >Nama Lengkap</label>
					<a-input
					type="text"
					class="form-control"
					placeholder="Ex: Bambang"
					v-model="name"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="Ex: rajendranohan4@gmail.com"
					v-model="email"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Nomor telfon</label>
					<a-input
					type="number"
					class="form-control"
					placeholder="Ex: 85157573144"
					v-model="phone_num"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-5">
					<label >password</label>
					<a-input
						label="Password"
						type="password"
						class="form-control"
						placeholder="Ex: *********"
						v-model="password"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label>Confirm Password</label>
					<a-input
					type="password"
					class="form-control"
					placeholder="Ex: *********"
					v-model="password_confirmation"
					>
					</a-input>
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
				name:'',
				email:'',
				phone_num:'',
				password:'',
				password_confirmation:'',
				errors: null
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			register: function () {
				let data = {
					name: this.name,
					email: this.email,
					phone_num: this.phone_num,
					password: this.password,
					password_confirmation: this.password_confirmation,
					role: 'merchant'
				};
				this.$store
					.dispatch("register", data)
					.then(response => {
					this.$router.push({name: 'Home'})
					}).catch(error => {
					this.errors = error
					})
				}
		}
	}

</script>

<style lang="scss">
</style>