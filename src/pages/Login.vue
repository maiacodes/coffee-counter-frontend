<template>
  <div>
    <button class="big" v-on:click="signup()">Create account</button>
    <br><br>
    <b>Already got an account?</b>
    <p>Please enter a login token:</p>
    <input class="loginBox" v-model="loginInput" placeholder="Token" />
    <br><button class="small" v-on:click="login(loginInput)">Login</button>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import path from "@/api/path";

export default {
  name: 'Login',
  data: function() {
    return {
      loginInput: "",
    }
  },
  methods: {
    signup: function() {
      axios({url: path("signup"), method: "POST"}).then((res) => {
        localStorage.setItem('token', res.data.token)
        router.push({ name: "Launch" })
      }).catch((err) => {
        router.push({ name: "Error", params: { error: err } })
      })
    },
    login: function (token) {
      axios({url: path("token"), method: "POST", headers: { Authorization: token } }).then(() => {
        localStorage.setItem('token', token)
        router.push({ name: "Launch" })
      }).catch(() => {
        alert("Incorrect login!")
      })
    },
  }
}
</script>
