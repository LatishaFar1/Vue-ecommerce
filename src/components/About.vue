<template>
   <v-app>
    <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>ABOUT</h2>
    </v-card>

        <br/>

      <div class="curtain">
              
       <div class="invert">
        <p>
         
           This mock e-commerce site is the first project I've built using Vue.js.
           <br/>
           <br/>
           <br/>
           Some info about me:
           <ul>
              <li>I learned Software Engineering at <a  href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169839&utm_content=127574231184&utm_term=flatironschool&uqaid=513799628798&CjwKCAjw682TBhATEiwA9crl31BXc1C92Js1tKHzxNNOTvA0MNgp6WVMF3hhgLKap48-_Lo7B_BWbhoCXlYQAvD_BwE&gclid=CjwKCAjw682TBhATEiwA9crl31BXc1C92Js1tKHzxNNOTvA0MNgp6WVMF3hhgLKap48-_Lo7B_BWbhoCXlYQAvD_BwE">Flatiron School</a></li>
           </ul>
        </p>
       

       </div>
      </div>
       
   </v-app>

</template>



<style>

 :root {
  --minh:  98vh;
  --color1: #85a7a0;
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


    h2{
       color: #03fcdb;
       font-size: 35px;
    }
    
</style>