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
                        <span @click="$router.push({path: `/Empresa/${ovos.id}`})"> {{ ovos.nome }}</span>
                        
                    </td>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="show[index].show = !show[index].show"></v-btn>

                    <v-btn icon @click="show[index].show = !show[index].show">
                        <v-icon>{{ show[index].show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show[index].show">
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
            show: [
                {id:1, show: false},
                {id:2,show: false},
                {id:3,show: false},
                {id:4,show: false},
                {id:5,show: false},
                {id:6,show: false},
                {id:7,show: false},
                {id:8,show: false},
                {id:9,show: false},
                {id:10,show: false}
                ]
        }
    },
    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaOvos = json
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