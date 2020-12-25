<template>
  <div id="app">
    <h1>Coffee Counter</h1>
    <div v-if="loaded">
      <button class="big" v-on:click="register(); count+=1">Add!</button>
      <p>You have had {{ count }} coffees!</p>
      <sub>Coffee Counter by Maia | <a v-on:click="logout">{{ uid }}</a></sub>
    </div>
    <div v-if="error">
      <p>An error occurred.</p>
    </div>
    <div v-if="authRequired">
      <p>Please enter a login token:</p>
      <input class="loginBox" v-model="loginInput" placeholder="Token" />
      <br><button class="small" v-on:click="login(loginInput)">Login</button>
    </div>
  </div>
</template>

<script>
let api = "https://coffees-api.maia.codes"
if (window.location.host==="localhost:8080") {
  api = "http://localhost:1323"
}
import axios from 'axios'

export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      loaded: false,
      count: 0,
      uid: "unloaded",
      error: null,
      authRequired: false,
      loginInput: "",
    };
  },
  async mounted() {
    if (!localStorage.getItem("token")) {
      this.authRequired = true
      return
    }
    const res = await axios({url: `${api}/info`, method: "GET", headers: { Authorization: localStorage.getItem("token") }})
    this.count = res.data.count
    this.uid = res.data.uid
    this.loaded = true
  },
  methods: {
    register: function() {
      axios({url: `${api}/coffee`, method: "POST", headers: { Authorization: localStorage.getItem("token") } })
    },
    logout: function() {
      localStorage.removeItem('token')
      this.authRequired = true
      this.loaded = false
    },
    login: function (token) {
      axios({url: `${api}/token`, method: "POST", headers: { Authorization: token } }).then(() => {
        localStorage.setItem('token', token)
        this.authRequired = false
        location.reload()
      }).catch(() => {
        alert("Incorrect login!")
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.big {
  padding: 20px;
  width: 200px;
  font-size: 28px;
}
.small {
  padding: 10px;
  width: 80px;
  font-size: 20px;
}
.loginBox {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
