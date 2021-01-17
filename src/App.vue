<template>
  <div id="background">
    <img
      src="https://pic1.zhimg.com/80/v2-6c5e3fcffd92c1149c28e1d075881043_720w.jpg?source=1940ef5c"
    />
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#background {
  position: fixed;
  z-index: -1;
}

#background img {
  width: 100vw;
  height: auto;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
