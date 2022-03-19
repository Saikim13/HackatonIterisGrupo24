<template>
  <v-app>
    <AppTopBar/>
    <v-main>
        <router-view/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({

  }),
};
</script>

