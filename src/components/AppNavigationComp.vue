<template>
<div>
    <v-app-bar app color="transparent" elevation="0" hide-on-scroll>
        <h1 class="green--text">{{appBarTitle}}</h1>
        <v-spacer></v-spacer>
        <v-tabs
            right
            class="hidden-sm-and-down tabs"
            hide-slider
            color="green">
                <v-tab
                v-for="(link, index) in navLinks"
                :key="index"
                class="tab-links">
                <router-link :to="link.path">{{link.name}}</router-link>
                </v-tab>
                </v-tabs>
            <v-btn
                    @click="drawer = !drawer"
                    style="background-color: transparent"
                    max-width="50"
                    elevation="0"
                    class="hidden-md-and-up"
                    >
                    <span class="material-symbols-outlined">menu</span>
                    
                </v-btn>
            
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" class="#383838" dark disable-resize-watcher height="fit-content">
            <v-list v-for="(link, index) in navLinks" :key="index">
            <v-list-item >
                <router-link :to="({name: link.path})" class="button">{{link.name}}</router-link>
            </v-list-item>
            </v-list>
            <v-btn v-if="isAuthenticated" class="green--text" @click="managerLogout" rounded small>LOGOUT</v-btn>
        </v-navigation-drawer>
</div>
</template>

<script>
import {useManagerLoginStore} from '@/stores/managerLogin'
import {useAuthStore} from '@/stores/authStore'
import {mapActions, mapState} from 'pinia'
export default {
    name: 'AppNavigationComp',
    
    components: {
        },
    data: () => ({
        appBarTitle: "reDraft",
        dialog: false,
        drawer: false,
        navLinks: [
                {name: 'Home', path: 'landing'},
                {name: 'Leagues', path: 'league-portal'},
                {name: 'Draftboard', path: 'draftboard'},
                {name: 'Login', path: 'login'},

            ],
    }),
    computed: {
        ...mapState(useAuthStore, ['isAuthenticated'])
    },
    methods: {
        ...mapActions(useManagerLoginStore, ['managerLogout'])
    },
};
</script>

<style lang="scss" scoped>
*a {
    text-decoration: none;
}
</style>