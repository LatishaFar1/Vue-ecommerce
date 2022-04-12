<template>
  <v-app>

    <v-main>
      <router-view />
      <h1>test</h1>
      <Home />
    </v-main>
  </v-app>
  
    
</template>



<script>

import Home from "./components/Home.vue"

export default {
  name: 'App',
  components: {Home},
  data: () => ({

  }),
};

</script>

<style>


/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
}


a,
.green {
  text-decoration: none;
  color: #00bd7e;
  transition: 0.4s;
}

h1{
  color: #00bd7e;
 
} */



</style>
