<template>
  <div class="container">
    <h1>Usuário</h1>
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
      <v-btn
        color="blue lighten-4"
        class="mr-4 mt-2 btn-std"
      >
        Editar cadastro
      </v-btn>
      </div>
  </v-card>
  </div>
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

.container {
margin: 10px 85px 30px;
}

.user-container {
align-items: center;
display: flex;
width: 430px;
padding: 0px 15px 15px 15px;
margin-top: 20px;
}
.user-avatar {
margin-right: 30px;
}

.user-props__container {
display:flex;
flex-direction: column;
 justify-content: space-between;
 padding-top: 40px;
}

.user-props {
width: 300px;
display:flex;
 justify-content: space-between;
}

.user-title {
font-weight: bold;

}

.btn-std {
width: 180px;
margin: 0 auto;
}

@media only screen and (max-width: 570px) {
.container {
  margin: 10px 15px 10px 15px;
}

.user-container {
width: 330px;
padding: 10px;
}

.user-props {
width: 200px;
}
}

@media only screen and (max-width: 360px) {
.container {
  margin: 5px 10px 5px 10px;
}

.user-container {
width: 310px;
padding: 10px;
}

.user-props {
width: 180px;
}
}


</style>
