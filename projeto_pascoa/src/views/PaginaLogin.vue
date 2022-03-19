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
            
            <div class="social">
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-linkedin</v-icon>
            </div>


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

    .botao {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }

    .botao a{
        text-decoration: none;
    }

    .social {
        padding: 4px
    }
</style>