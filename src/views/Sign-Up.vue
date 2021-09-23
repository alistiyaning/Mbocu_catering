<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

		<!-- / Sign Up Image And Headings -->
		
		<!-- Sign Up Form -->
<template>
	<div class="sign-in">
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">Sign Up</h1>
				<h5 class="font-regular text-muted">Enter your email and password to sign in</h5>
				<a-form :form="form" @submit="SignUp">
					<!-- username -->
					<a-form-item >
					<span slot="label">
						Username&nbsp;
						<a-tooltip title="What do you want others to call you?">
						<a-icon type="question-circle-o" />
						</a-tooltip>
					</span>
					<a-input
						
						v-decorator="[
						'username',
						{
							rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
						},
						]"
					/>
					</a-form-item>
					<!-- end username -->
					<!-- email -->
					<a-form-item label="E-mail">
					<a-input
					
						v-decorator="[
						'email',
						{
							rules: [
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
							],
						},
						]"
					/>
					</a-form-item>
					<!-- end email -->
					<!-- phone number -->
					<a-form-item  label="Phone Number">
					<a-input
						
						v-decorator="[
						'phone',
						{
							rules: [{ required: true, message: 'Please input your phone number!' }],
						},
						]"
						style="width: 100%"
					>
					</a-input>
					</a-form-item>
					<!-- end phone number -->
					<!-- password -->
					<a-form-item label="Password" has-feedback>
					<a-input
				
						v-decorator="[
						'password',
						{
							rules: [
							{
								required: true,
								message: 'Please input your password!',
							},
							{
								validator: validateToNextPassword,
							},
							],
						},
						]"
						type="password"
					/>
					</a-form-item>
					<!-- end password -->
					<!-- confirm password -->
					<a-form-item label="Confirm Password" has-feedback>
					<a-input
					
						v-decorator="[
						'confirmPassword',
						{
							rules: [
							{
								required: true,
								message: 'Please confirm your password!',
							},
							{
								validator: compareToFirstPassword,
							},
							],
						},
						]"
						type="password"
					/>
					</a-form-item>
					<!-- end comfirm password -->
					<!-- button sign up -->
					<a-form-item>
						<a-button type="primary" block html-type="submit" class="login-form-button">
							SIGN UP
						</a-button>
					</a-form-item>
					<!-- end button sign up -->
				</a-form>
				<p class="font-semibold text-muted"> have an account?
				<router-link to="/sign-in" class="font-bold text-dark">Sign in</router-link></p>
			</a-col>
			<!-- BG food -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin2.png" alt="">
			</a-col>
			<!-- end BG food -->
		</a-row>
	</div>
</template>
	

<script>
import axios from "axios";
	

	export default {
		name:"Sign-Up",
		valid: false,
		data() {
			return {
				formItemLayout: {
					labelCol: {
						xs: { span: 24 },
						sm: { span: 8 },
					},
					wrapperCol: {
						xs: { span: 24 },
						sm: { span: 16 },
					},
				},
				username:'',
				email:'',
				telfon:'',
				password:'',
				confirmPassword:'',
			}

		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			async SignUp(){
				try{
					const response =await axios.post("register",{
						name:this.username,
						email:this.email,
						phone_num:this.telfon,
						password:this.password,
						password_confirmation:this.password,
						
					});

					if (response.status >= 200 && response.status < 400) {
						this.$router.push("sign-in");
						// console.log(response.data);
					}else {
						console.log(response.data);
					}
				}catch(error) {
					console.log(error);
				}
			},

			compareToFirstPassword(rule, value, callback) {
				const form = this.form;
				if (value && value !== form.getFieldValue('password')) {
					callback('Two passwords that you enter is inconsistent!');
				} else {
					callback();
				}
				},
    		validateToNextPassword(rule, value, callback) {
				const form = this.form;
				if (value && this.confirmDirty) {
					form.validateFields(['confirm'], { force: true });
				}
				callback();
				},
		},
	};

</script>

<style lang="scss">
</style>