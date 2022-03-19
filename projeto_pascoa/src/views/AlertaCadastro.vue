<template>
<v-container class="alerta">
    <img src="https://i.pinimg.com/564x/d0/fe/72/d0fe7218c16ae25b5e731e76c6a5300d.jpg">
  <h1>Parabéns!</h1>
  <h2>Seu cadastro foi concluído!</h2>
</v-container>
</template>

<script>
export default {
    name: 'AlertaCadastro'
}
</script>

<style scoped>
.alerta{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://pin.it/2swlWIv");
    flex-direction: column;
}
img{
    border-radius: 20px;
}
</style>