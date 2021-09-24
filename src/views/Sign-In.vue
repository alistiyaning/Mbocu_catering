<!--
	This is the sign in page, it uses the dashboard layout in:
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <!-- Sign In Form Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">
          Enter your email and password to sign in
        </h5>

        <!-- Sign In Form -->
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit.prevent="handleSubmit"
          :hideRequiredMark="true"
        >
          <a-form-item class="mb-10">
            <label>Email</label>
            <a-input
              type="email"
              class="form-control"
              placeholder="email"
              v-model="form.email"
            >
            </a-input>
          </a-form-item>
          <a-form-item class="mb-5">
            <label>Password</label>
            <a-input
              label="Password"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="form.password"
            >
            </a-input>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              SIGN IN
            </a-button>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->

        <p class="font-semibold text-muted">
          Don't have an account?
          <router-link to="/sign-up" class="font-bold text-dark"
            >Sign Up</router-link
          >
        </p>
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="images/img-signin2.png" alt="" />
      </a-col>
      <!-- Sign In Image Column -->
    </a-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sign-In",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: null,
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit() {
      const data = {
        email: this.form.email,
        password: this.form.password,
      };
      try {
        const response = axios.post("login", data);
        if (response.status >= 200 && response.status < 400) {
          this.$router.push("dashboard");
        } else if (response.status >= 400) {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>