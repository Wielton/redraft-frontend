<template>
    <v-container fluid app>
        <v-row>
            <v-col cols="12" class="text-center">
                <router-link :to="({name: 'login'})" class="link"><v-btn rounded>login</v-btn></router-link>
                <router-link :to="({name: 'register'})" class="link"><v-btn rounded>register here!</v-btn></router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'LandingContentComponent'
};
</script>

<style lang="css" scoped>
.link {
    text-decoration: none;
}
</style>