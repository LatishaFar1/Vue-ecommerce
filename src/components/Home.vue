<template>
   <v-app>
       <NavBar class="index" />
       
       <Footer />
   </v-app>

</template>


<script>

import NavBar from '../components/NavBar.vue'
import Dashboard from '../components/Dashboard.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "Home",
    components: { NavBar, Dashboard, Footer }
}

</script>




<style scoped>

.index{
    z-index: 9999;
}



</style>