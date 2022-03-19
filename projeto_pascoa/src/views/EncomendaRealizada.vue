<template>
<div class="encomenda-realizada">
<v-card elevation="2" shaped class="mx-auto" max-width="80%"> 
  <v-card-title>
       <h2 class="text-h5 mx-auto" >
      {{listaOvos[idEmpresa].nome}} 
      </h2>
    </v-card-title>

    <v-card
    class="mx-auto"
    max-width="400"
    tile
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Número da reserva: 5488526</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Quantidade de ovos: {{quantidade}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>Valor</v-list-item-title>
        <v-list-item-subtitle>
          {{quantidade*listaOvos[idEmpresa].preco}}
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          O valor deve ser pago para a empresa. Basta apresentar esse voucher.
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Sua encomenda foi concluída! </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  

</v-card>
</div>
</template>

<script>
export default {
  name: "EncomendaRealizada",
  data() {
    return{
      listaOvos: [],
      idEmpresa:this.$route.params.id,
      quantidade:this.$route.params.quantidade

    }
  },

  created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json?=this.$route.params.id')
        .then(resposta => resposta.json())
        .then(json => {
          this.listaOvos = json
        })
    },

}
</script>

<style scoped>
</style>
