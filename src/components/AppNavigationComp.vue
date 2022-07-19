<template>
    <div>
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
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="hidden-md-and-up green--text">{{appTitle}}</v-toolbar-title>
            <v-btn class="hidden-sm-and-down green--text">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down green--text"></v-spacer>
            <v-btn class="hidden-sm-and-down green--text" v-model="dialog" @click="dialog = !dialog">LOGIN/JOIN</v-btn>
        </v-app-bar>
        
    </div>
</template>

<script>
export default {
    name: 'AppNavigationComponent',
    data() {
        return {
            dialog: false,
            appTitle: 'reDraft Fantasy Football',
            drawer: false,
            links: [
                {name: 'Signup/Login', path: '/registration/'},
                {name: 'Leagues', path: '/league-portal/'},
                {name: 'Rosters', path: '/league-portal/league/'},
                {name: 'Draftboard', path: '/league-portal/league/draft-board/'}
    ]
        };
    }
};
</script>

<style scoped>
</style>