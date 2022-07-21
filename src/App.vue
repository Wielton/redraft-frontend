<template>
  <v-app app id="inspire">
    <v-navigation-drawer app v-model="drawer" class="#383838" dark disable-resize-watcher>
            <v-list>
                <template v-for="(link, index) in links">
                    <v-list-item :key="index">
                            <router-link :to="link.path" tag="button">{{link.name}}</router-link>
                    </v-list-item>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        
        <v-app-bar app color="grey darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up green--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="hidden-md-and-up green--text">{{appBarTitle}}</v-toolbar-title>
            <v-btn class="hidden-sm-and-down green--text" @click="drawer = !drawer">Menu</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="green--text" @click="managerLogout">LOGOUT</v-btn>
        </v-app-bar>
      <v-main>
        <v-container>
        <router-view/>
        </v-container>
      </v-main>
      <v-footer app></v-footer>
  </v-app>
</template>

<script>
import {useManagerLoginStore} from '@/stores/managerLogin'
import {mapActions} from 'pinia'
export default {
  name: 'App',
  
  components: {
    },
  data: () => ({
    appBarTitle: "reDraft",
    dialog: false,
    drawer: false,
    links: [
            {name: 'Home', path: '/'},
            {name: 'Leagues', path: '/league-portal/'},
            {name: 'Draftboard', path: '/draftboard/'},
            {name: 'Login', path: '/registration/'}
          ],
  }),
  methods: {
    ...mapActions(useManagerLoginStore, ['managerLogout'])
  }
};
</script>
