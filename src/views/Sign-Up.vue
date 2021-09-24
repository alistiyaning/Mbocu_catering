<!--
	This is the sign up page, it uses the dashboard layout in:
	"./layouts/Default.vue" .
 -->

		<!-- / Sign Up Image And Headings -->

		<!-- Sign Up Form -->
<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <h1 class="mb-15">Sign Up</h1>
        <h5 class="font-regular text-muted">
          Enter your email and password to sign in
        </h5>

        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit.prevent="Register"
          :hideRequiredMark="true"
        >
          <a-form-item class="mb-10">
            <label>Username</label>
            <a-input
              type="text"
              class="form-control"
              placeholder="username"
              v-model="register.username"
            >
            </a-input>
          </a-form-item>

          <a-form-item class="mb-10">
            <label>Email</label>
            <a-input
              type="email"
              class="form-control"
              placeholder="email"
              v-model="register.email"
            >
            </a-input>
          </a-form-item>

          <!-- button sign up -->
          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              SIGN UP
            </a-button>
          </a-form-item>
          <!-- end button sign up -->
        </a-form>

        <p class="font-semibold text-muted">
          have an account?
          <router-link to="/sign-in" class="font-bold text-dark"
            >Sign in</router-link
          >
        </p>
      </a-col>
      <!-- BG food -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="images/img-signin2.png" alt="" />
      </a-col>
      <!-- end BG food -->
    </a-row>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Sign-Up",
  valid: false,
  data() {
    return {
      register: {
        username: "",
        email: "",
      },
      // telfon: "",
      // password: "",
      // confirmPassword: "",

      errors: null,
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    Register() {
      const data = this.register;
      try {
        const response = axios.post("register", data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
  },
};
</script>

<style lang="scss">
</style>