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
                <p><strong>Cadastrar</strong></p>
            </router-link>
            </div>

            <router-link to="/user">
            <div class="botao">
                <v-btn 
                color="cyan lighten-3"
                >
                Entrar
            </v-btn>
            </div>
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

    form {
        margin-top: 16px;
    }
    .cadastro {
        display: flex;
        justify-content: flex-end;
    }

    .cadastro a {
        color: black;
        text-decoration: none;
    }

    .botao a{
        text-decoration: none;
    }
</style>