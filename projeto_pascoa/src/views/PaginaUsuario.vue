<template>
  <v-container class="container">
    <h2 class="text-h6 text-center">Usuário</h2>
      <v-card elevation="2" class="user-container">
      <v-avatar class="user-avatar"
      color="primary" size="56"><img src="../assets/john.jpg" alt="Foto do usuário"></v-avatar>
      <div class="user-props__container">
      <div class="user-props">
      <span class="user-title">Nome:</span><span> {{name}}</span>
      </div>
      <div class="user-props">
      <span class="user-title">Telefone:</span><span> {{telefone}}</span>
      </div>
      <div class="user-props">
      <span class="user-title">Email:</span><span> {{email}}</span>
      </div>
      <div class="botao">
      <v-btn
        color="cyan lighten-3"
        class="mr-4 mt-2 btn-std"
      >
        Editar cadastro
      </v-btn>
      </div>
      </div>
  </v-card>
  </v-container>

</template>
<script>
  export default {
    data: () => ({
      name: "João Nascimento",
      email: "joao@gmail.com",
      telefone: "48900012344",
    }),
  };
</script>

<style scoped>

.user-container {
align-items: center;
display: flex;
max-width: 100%;
padding: 0px 15px 15px 15px;
margin-top: 20px;
}
.user-avatar {
margin-right: 30px;
}

.user-props__container {
display:flex;
flex-direction: column;
 justify-content: space-evenly;
 padding-top: 30px;
}

.user-props {
width: 300px;
display:flex;
justify-content: left;
}

.user-title {
font-weight: bold;
margin-right: 4px;

}

.btn-std {
width: 180px;
margin: 0 auto;
}

.botton {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
