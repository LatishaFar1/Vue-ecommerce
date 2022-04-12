<template>
        <v-app-bar app color="#33A18A" dark>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-divider vertical class="ml-1 mr-3"></v-divider>
            <v-btn icon>
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-toolbar-title>
                <span class="caption">CATEGORY</span>
            </v-toolbar-title>
            <v-divider vertical class="ml-5"></v-divider>
            <div style="position:absolute; margin-left:auto; margin-right:auto; left:0; right:0; text-align:center;">
                <h4>VUE SHOP</h4>
            </div>
        </v-app-bar>

</template>


<script>

export default {
    
}

</script>




<style scoped>
.v-toolbar__title {
    font-size: 1rem !important;
}
.v-badge__badge{
    font-size: 10px !important;
    height: 18px !important;
}

</style>