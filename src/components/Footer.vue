<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile>
            <v-card-title class="blue">
               <strong class="subheading">Contact me below</strong>

        <v-spacer></v-spacer>
      </v-card-title>



    <v-btn class="ma-1" dark >
        <a href="https://github.com/LatishaFar1">
                  <v-icon dark> mdi-github</v-icon>
            </a>
      </v-btn>

       <v-btn class="ma-1" dark >
        <a href="https://www.linkedin.com/in/latisha-faroul/">
                  <v-icon dark> mdi-linkedin</v-icon>
            </a>
      </v-btn>

       <v-btn class="ma-1" dark >
        <a href="lfaroul14@gmail.com">
                  <v-icon dark> mdi-email</v-icon>
            </a>
      </v-btn>
      
        <v-btn class="ma-1" dark >
        <a href="https://tishfaroul.medium.com/">
                  <v-icon dark> mdi-file</v-icon>
            </a>
      </v-btn>

        <v-btn class="ma-1" dark >
        <a href="https://twitter.com/TishFaroul">
                  <v-icon dark> mdi-twitter</v-icon>
            </a>
      </v-btn>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Tish Faroul</strong>
      </v-card-text>
    </v-card>
    </v-footer>

</template>






<style scoped>
      a{
            text-decoration: none;
            color: #42f5e3;
      }

</style>