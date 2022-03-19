<template>
    <v-container>
<h2 class="text-h6 text-center">
            Classificação
        </h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th colspan="2" class="text-left">
                        Clubes
                    </th>
                    <th class="text-right">
                        Pontos
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(ovos, index) of ovosLista" :key="ovos.id">
                    <td> {{ index + 1 }}</td>
                    <td>
                            <v-avatar size= "24" >
                                <img
                                    :src= "ovos.imagem"
                                    :alt="ovos.nome"
                                >
                            </v-avatar>
                       <span class="pl-2"> {{ ovos.nome }} </span>

                    </td>
                    <td class="text-right">{{ ovos.local }}</td>
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
            listaOvos: []
        }
    },
    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.ovosLista = json
            console.log(this.ovosLista)
        })
    },
}
</script>

<style scoped>

</style>