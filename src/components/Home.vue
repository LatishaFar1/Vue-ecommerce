<template>
   <v-app>


         <div class="font-sans antialiased leading-tight p-0 xs:-mr-5 w-full overflow">
    <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>HOME</h2>
    </v-card>
    <!-- <HomeHeader/> -->

    

  </div>
       
       <div class="curtain">
              <h4 class="home-welcome">Tish Faroul</h4>
       <div class="invert">
        <h1>IMG HERE</h1>
           
       
           "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit orci, egestas eget lectus ut, tempus facilisis enim. Aliquam arcu erat, hendrerit eget purus vel, maximus gravida justo. Aliquam commodo tortor nisi, non congue nisl consectetur a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eleifend fermentum tellus, id dignissim erat volutpat id. Donec bibendum, tortor id elementum imperdiet, leo elit fringilla velit, quis venenatis est massa ut metus. Vivamus faucibus risus eros, eu porttitor velit tempus ac. Sed eros erat, convallis a turpis in, porttitor efficitur magna. Nulla arcu augue, facilisis a sagittis id, mattis vel velit. Aliquam erat volutpat.



In eu purus et magna facilisis interdum. Mauris eu leo eget elit condimentum sollicitudin. Phasellus erat libero, aliquet non est id, pharetra sodales nunc. Vivamus tellus diam, ullamcorper in tempus eu, tempus in metus. Nullam ac accumsan sapien. Maecenas mattis venenatis porta. Nunc consequat porta enim, sit amet placerat sem. Maecenas magna diam, facilisis non ante eget, tempus ornare enim. Cras sit amet molestie est, vitae maximus urna. Nam mattis magna eget mauris cursus, in mattis quam eleifend. Suspendisse sed lacus vel augue tincidunt tempor. Aliquam malesuada turpis at ipsum dictum rutrum. Pellentesque a urna ante.

Vivamus egestas posuere tortor in fermentum. Nam ac massa purus. Vestibulum lectus libero, tempor sed aliquet at, posuere a tortor. Donec erat augue, pellentesque a leo at, pulvinar maximus augue. Proin at leo eu ex scelerisque tristique. Morbi fermentum sit amet est ut auctor. Suspendisse potenti.

Proin dictum, ex ullamcorper lobortis ultrices, dui arcu tempor turpis, sed congue lacus dolor vehicula velit. Nam ultricies nulla at ullamcorper ultrices. Aliquam a diam arcu. Vivamus ullamcorper, ex ac bibendum vehicula, mi est consequat nisl, ut ultrices turpis dolor in metus. Aenean lorem nibh, dignissim vitae nisi vel, lacinia fringilla est. Etiam blandit nibh sed arcu semper, nec rhoncus nibh tempus. Nullam bibendum leo metus, eget iaculis arcu pulvinar non.

Nam a nulla et ipsum mollis interdum. Ut tincidunt massa posuere nibh iaculis, quis efficitur turpis posuere. Pellentesque ante metus, cursus ac purus eu, bibendum volutpat velit. Pellentesque cursus mauris vitae magna vulputate tincidunt. Aliquam erat volutpat. Pellentesque at aliquam ipsum. Aenean a vehicula elit. Suspendisse auctor eu libero eget dignissim. Cras rhoncus dolor vel lacus mattis auctor. Curabitur vehicula velit eget odio condimentum mattis. Quisque tristique lobortis euismod. Praesent tellus elit, convallis ac semper sit amet, rhoncus et ligula. Fusce fringi

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