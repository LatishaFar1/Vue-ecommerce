<template>
    <v-container fluid>
        <v-card color="#000" height="150px" tile flat class="d-flex align-center justify-center" dark>
            <v-row>
                <v-col cols="12" sm="12">
                </v-col>
                <v-col cols="12" sm="12">
                    <v-breadcrumbs :items="items"  class="justify-center mt-n7" dark>
                        <template v-slot:divider>
                            <v-icon color="#03fcdb">mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-col>
            </v-row>
        </v-card>
        <v-card tile class="mx-16 mt-n10 card1" color="white">
            <v-row>
                <v-col cols="12" sm="8" class="pr-0">
                    <v-card height="250px" tile flat color="#269485">
                        <v-row>
                            <v-col cols="12" sm="4" class="pl-8 pt-5">
                                <v-btn color="black" dark small tile>
                                    new
                                </v-btn>
                                <h6 class="white--text mt-8">poncho</h6>
                                <h3 class="white--text mt-5">cashmere</h3>
                                <v-btn rounded color="#46756f" dark px-8 mt-10>
                                    more info
                                </v-btn>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-img src="src/assets/poncho.jpeg" max-height="400" max-width="400" contain class="mt-n6"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4" class="pl-0">
                    <v-card height="250px" tile flat color="#46756f">
                        <v-row>
                            <v-col cols="12" sm="6" class="pl-8 pt-5">
                                <v-btn color="black" dark small tile> new </v-btn>
                                 <h6 class="white--text mt-8">t-shirt</h6>
                                <h3 class="white--text mt-5">cotton</h3>
                                <v-btn rounded color="#46756f" dark px-8 mt-10>
                                    more info
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
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
        widows: 100%;
    }
    .card1{
        z-index: 10;
    }
    .card2{
        z-index: 1;
    }
    .a.v-breadcrumbs__item{
        color: #03fcdb;
    }
</style>