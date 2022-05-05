<>
<template>

   <v-container fluid>
         <v-row  class="mx-auto my-20">
     <v-card 
        v-for="project in Projects" :key="project.id"
    class="mx-auto my-13"
    max-width="400"
        cols="12"
        sm="4"
  >
    <v-img
      class="white--text align-end"
      height="200"
      :src="project.image"
    >
      <v-card-title class="title">{{project.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{project.Skills}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>About:</div>

      <div>{{project.Desc}}</div>
    </v-card-text>


    <v-card-actions>
      <v-btn link :href="project.video"> Demo Video </v-btn>

      <v-btn link :href="project.code"> Code </v-btn>
    </v-card-actions>
  </v-card>

</v-row>
   </v-container>

  
</template>




<script>

export default {
  data(){
return{
    search: "",
      Projects: [
          {
              id: 1,
              class: "pa-0",
              image: "Bookish.jpg",
              title: "BOOKISH",
              video: "https://youtu.be/bBv9UF9MjKI",
              code: "https://github.com/LatishaFar1/Bookish",
              Desc: "This app allows an admin user (using rails' active admin gem) to create, update, and delete books. Includes a custom map (built with the Google API) to locate local Bookish stores. It also allows you to search books on the site.",
              Skills: "JavaScript, Rails, React, Google Maps API"
          },
         { 
             id: 2,
             image: "AIRS.png",
             title: "AIRS",
             video: "https://youtu.be/kvmelDyCuoA",
             code: "https://github.com/LatishaFar1/AIRS-project",
             Desc: "The Avengers Incident Reporting System provides people with a platform to submit negative incidents (big or small) they encounter with the Avengers and those affiliated with them. The app includes a form to submit a complaint, a page to view all complaints logged, a page of lawyers (if they're necessary), and an emergency alert on the home page.",
             Skills: "JavaScript, React, JSON-Server"
          }

          
      ]
  };
}
  
}
</script>

<style scoped>

.v-chip.v-size--default{
        border-radius: 50px !important;
        font-size: 14px !important;
        height: 40px !important;
        width: 40px !important;
    }
    .v-card--reveal{
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }

.title{
    font-weight: bold;
    font-size: 30px;
    color: #D9FFF8 ;
 background: linear-gradient(#9BB291 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.08em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));
}
.title:hover{
      --p: 100%;
}
</style>

