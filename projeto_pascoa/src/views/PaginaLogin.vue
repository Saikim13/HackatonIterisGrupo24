<template>
    <v-container>
        <h2 class="text-h6 text-center">Realize o seu Login</h2>   

        <v-form
            ref="form"
        >
            <v-text-field
                label="Email"
            ></v-text-field>

            <v-text-field
                label="Senha"
                type="password"
                required
            ></v-text-field>

            <div class="cadastro">
            
            <router-link to="/cadastro">
                <p>Cadastrar</p>
            </router-link>
            </div>

            <router-link to="/user">
            <v-btn
            color="indigo lighten-1"
            >
            Entrar
            </v-btn>
            </router-link>

        </v-form>
    </v-container>
</template> 


<script>
export default {
        name:"PaginaUsuario",
    
}
</script>

<style scoped>
    .cadastro {
        display: flex;
        justify-content: flex-end;
    }

    .cadastro a {
        color: black;
        text-decoration: none;
    }
</style>