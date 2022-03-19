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


            <div class="botao">
                <router-link to="/user">
                <v-btn 
                color="cyan lighten-3"
                >
                Entrar
                </v-btn>
                </router-link>
            
            
            <div class="social">
                <a href='https://facebook.com'><v-icon>mdi-facebook</v-icon></a>
                <a href='https://linkedin.com'><v-icon>mdi-linkedin</v-icon></a>
            </div>


            </div>


        </v-form>
    </v-container>
</template> 


<script>
export default {
        name:"PaginaUsuario",
    
}
</script>

<style scoped>

    h2 {
        margin-top: 18px;
    }

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
        padding-right: 16px;

    }

    .social a {
        text-decoration: none;
    }
</style>