<template>
    <v-container>
        <v-app-bar app class="cyan lighten-3">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>
                Luna Easter 🐰
            </v-toolbar-title>
            <v-tooltip v-if="!$vuetify.theme.dark" bottom>
                <template v-slot:activator="{ on, attrs }">
                <v-btn class="mx-auto" icon right v-on="on" v-bind="attrs"  small fab @click="darkMode">
                    <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
                </v-btn>
                </template>
                <span>ON</span>
            </v-tooltip>

            <v-tooltip v-else right bottom>
                <template v-slot:activator="{ on, attrs }">
                <v-btn class="mx-auto" icon v-on="on" v-bind="attrs" small fab @click="darkMode">
                    <v-icon>mdi-white-balance-sunny</v-icon>
                </v-btn>
                </template>
                <span>OFF</span>
            </v-tooltip>
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
            active-class="pink lighten-4 white--text text--accent-4"
            >
            <router-link class="link" to="/">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Home</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link class="link" to="/Ovos">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-egg-easter</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Lista de Ovos</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link class="link" to="/Cadastro">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-clipboard-file-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Cadastro</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link class="link" to="/Usuario">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title> Usuário</v-list-item-title>
            </v-list-item>
            </router-link>
            <router-link class="link" to="/Login">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-login-variant</v-icon>
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
        }),
  methods: {
  darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }

}
</script>


<style scoped>
    .link {
        text-decoration: none;
    }
</style>
