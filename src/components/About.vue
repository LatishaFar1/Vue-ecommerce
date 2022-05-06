<template>
   <v-app>

         <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>ABOUT</h2>
    </v-card>

     

      <div class="curtain">
              
       <div class="invert">
        <p>
           <br/>
           <br/>
           <br/>
          <h2>This is the first web-app I've built using Vue.js.</h2> 
           <br/>
           <br/>
           <br/>
            <br/>
           <br/>
          

          <p class="about">
            I learned Software Engineering at <a href="https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169839&utm_content=127574231184&utm_term=flatironschool&uqaid=513799628798&CjwKCAjw682TBhATEiwA9crl31BXc1C92Js1tKHzxNNOTvA0MNgp6WVMF3hhgLKap48-_Lo7B_BWbhoCXlYQAvD_BwE&gclid=CjwKCAjw682TBhATEiwA9crl31BXc1C92Js1tKHzxNNOTvA0MNgp6WVMF3hhgLKap48-_Lo7B_BWbhoCXlYQAvD_BwE">Flatiron School</a>
            <br/>
            We covered: JavaScript  <img height="40" src="https://iconape.com/wp-content/png_logo_vector/javascript-logo.png"> <br/>
             React <img height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png">  <br/>
            Ruby on Rails  <img height="40" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"> <br/> <br/>
            and more!
            <br/>
            <br/>
            I'm continuing to learn other things in my spare time.
        </p>

        <p class="about-body">

               Check out some of my 
               <a href="https://tish-portfolio.netlify.app/projects">projects</a> 

        </p>
        </p>
            
          
            
       </div>

      

      </div>
       
       </div>
   </v-app>

</template>



<style>

.about{
   padding-left: 20%;
   padding-right: 20%;
   color: #9BB291;
}


 :root {
  --minh:  98vh;
  --color1: #E8E1EF;
  --color2: #D9FFF8;
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
  min-height: var(--minh);
}


    h2{
       color: #03fcdb;
       font-size: 35px;
    }

    .about-body{
       color: #9BB291;

}

    
</style>