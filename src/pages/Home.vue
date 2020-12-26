<template>
  <div>
    <div v-if="loaded">
      <button class="big" v-on:click="register(); count+=1">Add!</button>
      <p>You have had {{ count }} coffees!</p>
      <sub>Coffee Counter by Maia | <a v-on:click="alert(`Account token: ${token}`)">{{ uid }}</a> | <a v-on:click="logout()" href="#">Logout</a></sub>
    </div>
    <div v-if="!loaded">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import path from "@/api/path";
import axios from 'axios'

export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      loaded: false,
      count: 0,
      uid: "",
      token: localStorage.getItem("token")
    };
  },
  async mounted() {
    if (!this.token) {
      router.push({ name: "Login" })
      return
    }
    const res = await axios({url: path("info"), method: "GET", headers: { Authorization: this.token}}).catch((err) => {
      router.push({ name: 'Error', params: { error: err } })
    })
    this.count = res.data.count
    this.uid = res.data.uid
    this.loaded = true
  },
  methods: {
    register: function() {
      axios({url: path("coffee"), method: "POST", headers: { Authorization: this.token } })
    },
    logout: function() {
      localStorage.removeItem("token")
      router.push({ name: 'Launch' })
    },
    alert: function (a) {
      alert(a)
    }
  }
}
</script>
