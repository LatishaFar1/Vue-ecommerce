<template>

    <v-app>
    <v-container fluid>
        <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
          <h2>SHOP</h2>
    </v-card>



  <input type="text" v-model="search" placeholder="Search" class="search"/> 


        <!-- <v-col cols="3" class="py-0 pr-0 mt-n3">
          <v-card flat outlined tile>
            <v-toolbar flat>
              <v-icon color="black" class="mr-2">msi-chevron-down</v-icon>
              <strong>PRICE</strong>
              <v-spacer></v-spacer>
              <v-icon color="grey" small>mdi-close</v-icon>
            </v-toolbar>
            <v-toolbar flat>
              <v-text-field  placeholder="$10" filled rounded class="mx-2"></v-text-field>
              <v-text-field  placeholder="$100" filled rounded class="mx-2"></v-text-field>
            </v-toolbar>
            <v-range-slider color="blue" max="40" min="-30"></v-range-slider>
          </v-card>
         </v-col> -->

  <v-row  class="mx-auto my-20">
  <div v-for="(clothe) in filteredClothes"> 

     <v-card
    class="mx-auto my-13"
    max-width="374"
           cols="12"
              sm="4">
  
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img  :src="clothe.image"   width="300" height="300" contain></v-img>

    <v-card-title class="title">{{clothe.title}}</v-card-title>

      <div class="my-4 text-subtitle-1 green--text">
        $ {{clothe.price}}
      </div>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
      <v-btn
        color="lighten-2"
        text
        v-on:click="add"
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
 </v-row>
  

 


    
  </v-container>
  </v-app>
</template>



<script>

export default {
  data(){
      return{
      search: "",
      Clothes: [
          {
              id: 1,
              class: "pa-0",
              image: "poncho.jpeg",
              title: "PONCHO",
              price: "45.00"
          },
          {
              id: 2,
              class: "pa-0",
              image: "tan jacket.jpeg",
              title: "JACKET",
              price: "55.00"
          },
          {
              id: 3,
              class: "pa-0",
              image: "shirt - be kind.jpeg",
              title: "SHIRT",
              price: "15.00"
          },
           {
              id: 4,
              class: "pa-0",
              image: "shirt - be kind.jpeg",
              title: "SHIRT",
              price: "15.00"
          },
            {
              id: 5,
              class: "pa-0",
              image: "tan jacket.jpeg",
              title: "JACKET",
              price: "55.00"
          },
          {
            id: 6,
            class: "pa-0",
            image: "orange sneakers.jpeg",
            title: "SHOES",
            price: "120.00"
          }
      ]
  };
},
  computed: {
    filteredClothes(){
      return this.Clothes.filter(clothe => {
        return clothe.title.toLowerCase().includes(this.search.toLowerCase())
    
      })
    }
  },
  methods: {
    add(){
      alert("added to cart")
    },
  }
}
</script>




<style scoped>
    .container{
        padding: 0px !important;
    }
    h4{
        color: #03fcdb;
    }
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

    h2{
       color: #03fcdb;
       font-size: 35px;
    }
    .search{
      color: #03fcdb;
      background-color: black;
      text-align: center;
    }
    
</style>