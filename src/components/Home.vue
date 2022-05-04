<template>
   <v-app>


         <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>HOME</h2>
    </v-card>
    <HomeHeader/>

  </div>
       
   </v-app>

</template>


<script>
import HomeHeader from "./HomeHeader.vue";




export default {
    components: { HomeHeader }
}

</script>




<style scoped>

.index{
    z-index: 9999;
}
    h2{
       color: #03fcdb;
       font-size: 35px;
    }



</style>