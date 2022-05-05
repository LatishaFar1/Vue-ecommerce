<>
<template>

   <div >
     <v-card 
        v-for="project in Projects" :key="project.id"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
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


</div>

  
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
              Skills: "JavaScript, Rails, React"
          },
         { 
             id: 2,
             image: "",
             title: "AIRS",
             video: "",
             code: "",
             Desc: "",
             Skills: ""
          }

          
      ]
  };
}
  
}
</script>

<style scoped>
.title{
    font-weight: bold;
    font-size: 30px;
}

</style>

