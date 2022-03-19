<template>
    <v-container>
        <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        > 
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="blue darken-4--text text--accent-4"
            >
            <router-link class="link" to="/">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Home</v-list-item-title>
            </v-list-item>     
            </router-link>
            <router-link class="link" to="/ovos">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-egg-easter</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Lista de Ovos</v-list-item-title>
            </v-list-item>     
            </router-link>
            <router-link class="link" to="/Empresa">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Lista de Vendedores</v-list-item-title>
            </v-list-item>     
            </router-link>
            <router-link class="link" to="/Cadastro">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Cadastro</v-list-item-title>
            </v-list-item>     
            </router-link>
            <router-link class="link" to="/U">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Usuário</v-list-item-title>
            </v-list-item>     
            </router-link>
            <router-link class="link" to="/">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Login</v-list-item-title>
            </v-list-item>     
            </router-link>               
            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () =>
        ({
            drawer: false,
            group: null
        })
    
}
</script>


<style scoped>
    .link {
        text-decoration: none;
    }
</style>