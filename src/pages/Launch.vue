<template>
  <div>
    <p>Loading...</p>
  </div>
</template>

<script>
import router from "@/router";
import axios from 'axios'
import path from "@/api/path";

export default {
  name: 'Launch',
  components: {},
  mounted() {
    if (!localStorage.getItem("token")) {
      router.push("login")
      return
    }
    axios({
      url: path("token"),
      method: "POST",
      headers: {Authorization: localStorage.getItem("token")}
    }).then(() => {
      router.push("home")
    }).catch((err) => {
      router.push({ name: 'Error', params: { error: err } })
    })
  }
}
</script>
