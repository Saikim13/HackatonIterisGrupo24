<template>
    <v-container>
        <h2>Teste</h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                </tr>
            </tbody>
            </template>
  </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name:"ListaOvos"
}
</script>

<style scoped>

</style>