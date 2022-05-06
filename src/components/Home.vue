<template>
   <v-app>


         <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>HOME</h2>
    </v-card>
    <!-- <HomeHeader/> -->

    

  </div>
       
       <div class="curtain">
          <br/>
          <br/>
              <h4 class="home-welcome">Tish Faroul ⚡️🎧🌙</h4>
       <div class="invert">

        

       <p class="home">
         This is the first web app I've createed using Vue.js - completely self taught!
         <br/>
          <br/>
         Check out the 'Shop' tab to see how I've been experimenting with Vue.
           <br/>
            <br/>
         See my 'Projects' tab for other things I've worked on.
           <br/>
           <br/>
     

</p>
       </div>
    </div>
   </v-app>

</template>


<script>
import HomeHeader from "./HomeHeader.vue";




export default {
    components: { HomeHeader }
}

</script>




<style >

.home{
  padding-left: 25%;
  padding-right: 25%;
  color: #3c4937;
  font-weight: bold;
}
.home-welcome{
       color: #03fcdb;
       font-size: 35px;
       
}


.index{
    z-index: 9999;
}
    h2{
       color: #03fcdb;
       font-size: 35px;
    }

:root {
  --minh:  98vh;
  --color1: #D9FFF8;
  --color2: #C7FFDA;
}
.curtain {
  
  background-image: linear-gradient(to bottom, var(--color2) 50%, var(--color1) 50%);

}


.curtain::after {
  content: "";
  display: block;
    min-height: var(--minh);
}

.invert {
  position: sticky;
  top: 20px;

  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  display: flex;
  align-items: center;
  justify-content: center;
  
  /** set the minimum height of the section **/
  min-height: var(--minp);
}


</style>