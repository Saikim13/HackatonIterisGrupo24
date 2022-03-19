<template>
  <v-app>
    <v-card width="80%" class="mx-auto">
      <v-card-title class="align-center justify-center">
        Bem-vinde ao Luna Easter
      </v-card-title>
        <v-carousel v-model="model" hide-delimiters>
        <v-carousel-item
          v-for="(dado,i) in dados"
          :key="i"
          :src="dado.imagem"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >  
        </v-carousel-item>          
      </v-carousel>
      <v-card-text class="descricao">
        Conheça a magia do ovo de Páscoa caseiro. 
        O melhor de tudo é que você tem como personalizar esse doce de 
        acordo com o gosto de cada cliente. 
        Além, também, de poder aproveitar os momentos 
        na cozinha de casa pra se divertir com as crianças e o 
        principal: ainda conseguir economizar e ajudar as suas finanças pessoais.
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="$router.push({path: '/ovos'})">Ovos disponíveis</v-btn>              
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
   .descricao {
    text-align: justify;
    }  
</style>
