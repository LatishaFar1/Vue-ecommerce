<template>
  <div id="app">
    <nav class="hover">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/projects">Projects</router-link> |
      <router-link to="/shop">Shop</router-link> |
     
    </nav>
    <router-view/>

    <Footer/>
   
  </div>
</template>


<script>


import Footer from "./components/Footer.vue"


export default {
    components: { Footer}
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

   background: linear-gradient(#E8E1EF 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));
}

nav:hover{
     --p: 100%;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
