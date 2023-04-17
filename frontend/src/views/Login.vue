<template>
  <Wrapper>
    <form @submit.prevent="onSubmit">
      <Input
        label="Email"
        placeholder="Email"
        type="text"
        v-model="login.email"
        :error="$v.login.email"
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        v-model="login.password"
        :error="$v.login.password"
      />
      <p>{{ error }}</p>
      <button class="button button-primary" type="submit">Login</button>
      <hr class="divider" />
      <router-link to="/sign_up"
        ><button class="button button-secondary">Sign Up</button></router-link
      >
    </form>
  </Wrapper>
</template>

<script>
import Input from "../components/Input.vue";
import Wrapper from "../components/Wrapper.vue";
import { required, email } from "vuelidate/lib/validators";
import { login } from "../services/UserService";
import { setUserToken } from "../utils/session";
export default {
  name: "Login",
  components: {
    Input,
    Wrapper,
  },
  data: () => {
    return {
      login: { email: "", password: "" },
      error: "",
    };
  },
  validations: {
    login: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    onSubmit() {
      this.error = "";
      this.$v.login.$touch();
      if (!this.$v.login.$error) {
        login(this.login).then((response) => {
          if (response.hasError) {
            this.error = response.error;
          } else {
            setUserToken(response.data.jwt, response.data.data.user.id );
            this.$router.push({
              path: "/characters",
            });
          }
        });
      }
    },
  },
};
</script>
<style>
</style>
