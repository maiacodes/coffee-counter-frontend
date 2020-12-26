<template>
  <div>
    <b>An error occurred</b>
    <p>{{error}}</p>
  </div>
</template>

<script>
//import router from "@/router";

export default {
  name: 'Error',
  data: function() {
    return {
      error: this.$route.params.error
    }
  }
}
</script>
