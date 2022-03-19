<template>
    <v-container>
        <h2 class="text-h6 text-center">
            Lista de Vendedores
        </h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th colspan="2" class="text-left">
                        Ovos
                    </th>
                    <th class="text-right">
                        Lista
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(ovos, index) of listaOvos" :key="ovos.id">
                    <td> {{ index + 1 }}</td>
                    <td>
                        <span> {{ ovos.nome }}</span>
                        
                    </td>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="show = !show"></v-btn>

                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-card-text>
<img
                        :src= "ovos.imagem"
                        :alt="ovos.nome"
                        >
                            <br />
                        </v-card-text>
                    </div>
                </v-expand-transition>
                </tr>
            </tbody>
            </template>
        </v-simple-table>

    </v-container>
</template>

<script>
export default {
    name:"ListaOvos",

    data() {
        return{
            listaOvos: [],
            show: false
        }
    },
    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaOvos = json
            console.log(this.listaOvos)
        })
    },
}
</script>

<style scoped>
    img {
        max-width: 100%;
        max-height: 100%;
    }


</style>