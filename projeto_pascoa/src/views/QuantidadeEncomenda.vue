<template>
  <v-container class="quantidade-encomenda">
  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
           {{listaOvos[idEmpresa].nome}} 
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-content >
        <v-list-item-title class="text-h5 mb-1 pl-15">
          Valor:
        </v-list-item-title>
        <v-list-item-subtitle class="pl-15">R$ {{preco}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions >
      <v-btn class="mx-auto"
        outlined
        rounded
        text
        @click="subtrair()"
      >
        -
      </v-btn>
      <span>{{quantidade}}</span>
      <v-btn class="mx-auto"
        outlined
        rounded
        text
        @click="adicionar()"
      >
        +
      </v-btn>
    </v-card-actions>
        <v-btn @click="$router.push({path: `/Realizada/${idEmpresa}/${quantidade}`})" block class="white--text" color="orange lighten-2">
          Finalizar Encomenda
        </v-btn>
  </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'QuantidadeEncomenda',
  data(){
    return {
      listaOvos: [],
      idEmpresa:this.$route.params.id,
      quantidade: 0,
      preco: 0,
    }
  },
  created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json?')
        .then(resposta => resposta.json())
        .then(json => {
          this.listaOvos = json
        })
  },
   methods: {
      adicionar(){
          this.quantidade = this.quantidade+1;
          this.preco = (this.listaOvos[this.idEmpresa].preco)*this.quantidade;
      },
      subtrair(){
        if(this.valor > 1){
          this.quantidade = this.quantidade-1;
          this.preco = (this.listaOvos[this.idEmpresa].preco)*this.quantidade;
        }
      },
    }
}
</script>

<style scoped>
.home-image {
  border-radius: 3px;
}
</style>