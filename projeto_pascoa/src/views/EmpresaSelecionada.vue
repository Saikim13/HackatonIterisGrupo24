<template>
<div class="empresa-selecionada">
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
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Endereço: {{listaOvos[idEmpresa].local.endereco}} - {{listaOvos[idEmpresa].local.cep}}
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  name: "EmpresaSelecionada",
  loading: false,
  selection: 1,

  data() {
    return{
      listaOvos: [],
      idEmpresa:1,
    }
  },

  created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaOvos = json
            console.log(this.listaOvos[0]);
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
