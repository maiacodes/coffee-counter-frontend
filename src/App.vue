<template>
  <div id="app">
    <h1>Coffee Counter</h1>
    <router-view/>
  </div>
</template>

<style>
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
  width: 100px;
  font-size: 20px;
}
.loginBox {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}


@media (prefers-color-scheme: dark) {
  html {
    background-color: black;
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  html {
    background-color: white;
    color: #2c3e50;
  }
}
</style>
