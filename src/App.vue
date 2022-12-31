<template>
  <v-app>
    <AppNavigationComp />
    <v-main app>
        <router-view/>
    </v-main>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import AppNavigationComp from './components/AppNavigationComp.vue';
export default {
  name: 'App',
  components: { AppNavigationComp },
}
</script>
<style lang="scss" scoped>

</style>
