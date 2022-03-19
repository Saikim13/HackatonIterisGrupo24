<template>
  <v-app>
    <v-card width="80%" class="mx-auto">
      <v-card-title class="align-center justify-center">
        Seja bem-vinde 
      </v-card-title>
        <v-carousel v-model="model">
        <v-carousel-item
          v-for="(dado,i) in dados"
          :key="i"
          :src="dado.imagem"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >      
        </v-carousel-item>
      </v-carousel>
      <v-text>
      </v-text>
      <v-card-actions class="justify-center">
        <v-btn>Conheça os produtos</v-btn>
        <v-btn>Conheça os vendedores</v-btn>        
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({  
    model: 0,  
    dados: []
  }),  

  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
        .then(res => res.json())
        .then(res => {
          this.dados = res;

          console.log(this.dados)
        })
  }

}
</script>

<style scoped>

</style>
