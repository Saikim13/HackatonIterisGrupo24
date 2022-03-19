<template>
<div class="empresa-selecionada text-center">
<v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="80%"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="listaOvos[idEmpresa].imagem"
    ></v-img>
    <v-card-title>{{listaOvos[idEmpresa].local.nome}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="avaliacao"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
           {{avaliacao}} ({{quantidade}})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Endereço: {{listaOvos[idEmpresa].local.endereco}} - {{listaOvos[idEmpresa].local.cep}}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="cyan lighten-1"
        text
      >
        Produto
      </v-btn>
      
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><h3>{{listaOvos[idEmpresa].nome}}</h3></v-list-item-title>
            <v-list-item-subtitle>Sabor: {{listaOvos[idEmpresa].sabor}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>
              <div class="my-4 text-subtitle-1">
                R${{listaOvos[idEmpresa].preco}}
              </div>
          </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn  @click="$router.push({path: `/Quantidade/${idEmpresa}`})" block class="white--text" color="cyan lighten-2">
              Encomendar
        </v-btn>
      </div>
    </v-expand-transition>

  </v-card>
</div>
</template>

<script>
export default {
  name: "EmpresaSelecionada",
  data() {
    return{
      listaOvos: [],
      idEmpresa:this.$route.params.id-1,
      show: false,
      loading: false,
      selection: 1,
      quantidade: 0,
      avaliacao: 1,

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
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },

}
</script>

<style scoped>
.empresa-selecionada{
  text-decoration: none;
}
</style>
