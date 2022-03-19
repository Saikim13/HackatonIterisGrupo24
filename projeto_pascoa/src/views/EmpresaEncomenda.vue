<template>
    <v-container>
        <h2 class="text-h6 text-center">
            Lista de encomendas
        </h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th>
                        Cliente
                    </th>
                    <th>
                        Ovo
                    </th>
                    <th>
                        Quantidade
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td> Rafaela Oliveira</td>
                    <td> Ovo de avelã</td>
                    <td>4</td>
                    <td> Encomendado</td>
                </tr>
                <tr>
                    <td> Kim Cordeiro</td>
                    <td> Ovo de avelã</td>
                    <td>2</td>
                    <td> Encomendado </td>
                </tr>
                <tr>
                    <td> Brenda Silveira</td>
                    <td>Ovo de avelã</td>
                    <td>1</td>
                    <td> Produzido </td>
                </tr>
                <tr>
                    <td> Victor Rodrigues</td>
                    <td> Ovo de avelã</td>
                    <td>3</td>
                    <td> Produzido</td>
                </tr>
                <tr>
                    <td> Guilherme de Lima</td>
                    <td> Ovo de avelã</td>
                    <td>1</td>
                    <td> Entregue</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>

    </v-container>
</template>

<script>
export default {
    name:"EmpresaEncomenda",

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