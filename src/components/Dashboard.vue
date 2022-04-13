<template>
    <v-container fluid>
        <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
              <v-row>
        <v-col cols="12" sm="12">
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>
    </v-card>

    <v-card tile class="mx-16 mt-n10 card1" color="white">
      <v-row>
        <v-col cols="12" sm="8" class="pr-0">
          <v-card height="250px" tile flat color="#030706">
            <v-row>
              <v-col cols="12" sm="4" class="pl-8 pt-5">
                <h3 class="white--text mt-5">welcome</h3>
                <v-btn rounded color="#6fc9bd" dark class="px-8 mt-10" >More Info </v-btn>
              </v-col>

              <v-col cols="12" sm="8">
                <v-img
                  src="store logo.jpeg"
                  max-height="250"
                  max-width="400"
                  contain
                  class="mt-n6"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="3" class="mt-n6 pr-0">
          <v-toolbar flat outlined>
            <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-divider vertical></v-divider>
            <v-btn icon class="ml-1">
              <v-icon color="#080c0b"> mdi-sync </v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>

        <v-col cols="12" sm="3" class="mt-n6 px-0">
          <v-toolbar flat outlined>
            <v-toolbar-title>
              SORT BY: <span>$</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="mr-4">
              <v-icon color="black">mdi-menu-down</v-icon>
            </v-btn>
          </v-toolbar>
        </v-col>

        <v-col cols="12" sm="3" class="mt-n6 pl-0">
          <v-toolbar flat outlined>
            <v-btn icon class="mr-1">
              <v-icon color="#3853D8">mdi-apps</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon class="mx-1">
              <v-icon color="grey">mdi-format-list-bulleted</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar>
        </v-col>

        <v-col cols="3" class="py-0 pr-0 mt-n3">
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
         </v-col>

        <v-col cols="9" class="mt-n3">
          <v-row>
            <v-col
              cols="12"
              sm="4"
              v-for="(clothe, i) in Clothes"
              :key="i"
              :class="clothe.class"
            >

              <v-hover v-slot:default="{ hover }">
                <v-card height="280" align="center" flat outlined tile>
                  <v-img  :src="clothe.image"   width="300" height="300" contain ></v-img>
                  <v-card-text class="mt-n4">
                    <strong color="#13c2ab">{{clothe.title}}</strong>
                    <br>
                    <strong class="green--text">{{clothe.price}}</strong>
                  </v-card-text>

                  <v-expand-transition>

                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        blue
                        v-card--reveal
                        display-3
                        white--text
                      "
                      style="height: 100%"
                    >
                      <v-btn rounded color="white">
                        <v-icon>mdi-cart-outlined</v-icon>
                        Buy
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-content-copy</v-icon>
                      </v-btn>
                      <v-btn fab small color="white" class="ml-2">
                        <v-icon color="black">mdi-heart-outline</v-icon>
                      </v-btn>
                    </div>

                  </v-expand-transition>

                </v-card>
              </v-hover>


            </v-col>
          </v-row>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>



<script>

export default {
  data: () => ({
      items: [
          {
              text: "HOME",
              disabled: false,
              href: "breadcrumbs_home",
          },
          {
              text: "TOPS",
              disabled: false,
              href: "breadcrumbs_tops"
          },
           {
              text: "BOTTOMS",
              disabled: false,
              href: "breadcrumbs_bottoms"
          }
      ],
      Clothes: [
          {
              class: "pa-0",
              image: "poncho.jpeg",
              title: "PONCHO",
              price: "45.00"
          }
      ]
  })
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

    .a.v-breadcrumbs__item{
        color: #03fcdb;
    }
</style>