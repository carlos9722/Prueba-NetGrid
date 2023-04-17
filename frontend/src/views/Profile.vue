<template>
  <Wrapper>
    <form @submit.prevent="onSubmit">
      <Input
        label="Name"
        placeholder="Name"
        type="text"
        v-model="user.name"
        :error="$v.user.name"
      />
      <Input
        label="Email"
        placeholder="Email"
        type="text"
        v-model="user.email"
        :error="$v.user.email"
      />
     <!--  <Input
        label="Password"
        placeholder="Password"
        type="password"
        v-model="user.password"
        :error="$v.user.password"
      />
      <Input
        label="Confirm Password"
        placeholder="Password"
        type="password"
        v-model="user.password_confirm"
        :error="$v.user.password_confirm"
      /> -->
      <Input
        label="Birthdate"
        placeholder="Birthdate"
        type="date"
        v-model="user.birthdate"
        :error="$v.user.birthdate"
      />
      <Input
        label="Address"
        placeholder="Address"
        type="text"
        v-model="user.address"
        :error="$v.user.address"
      />
      <Input
        label="City"
        placeholder="City"
        type="text"
        v-model="user.city"
        :error="$v.user.city"
      />
      <p>{{ error }}</p>
      <button class="button button-secondary" type="submit">Update</button>
    </form>
  </Wrapper>
</template>

<script>
import Input from "../components/Input.vue";
import Wrapper from "../components/Wrapper.vue";
import { required, minLength, email } from "vuelidate/lib/validators";
import { UpdateUserData, getUserData} from "../services/UserService";

export default {
  name: "SignUp",
/*   name: "GetUserData", */
  components: {
    Input,
    Wrapper,
  },
  data: () => {
    return {
        user: { name: '',
        email: '',
        birthdate: '',
        address: '',
        city: '',
      }, error: "" };
  },
  validations: {
    user: {
      name: { required, min: minLength(10) },
      email: { required, email },
      birthdate: { required },
      address: { required },
      city: { required },
    },
  },
  methods: {

    onSubmit() {
      this.$v.user.$touch();
      if (!this.$v.user.$error) {
        UpdateUserData(this.user).then((response) => {
          if (response.hasError) {
            this.error = "error";
          } else {
            this.$router.push({
              path: "/characters",
            });
          }
        });
      }
    },
  },

  mounted() {
    getUserData()
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
