<template>
    <v-container>
        <v-row>
            <v-col>
                <h1 class="headline mt-3 green--text">League Registration</h1>
                <p class="subheading mt-3 grey--text">
                    This is where a user can create or join a league
                    <br>
                    If created, the user will receive an Invite Key to distribute to the users who will join that league 
                    <br>
                    If joining an already created league, the user will join with the given Invite Key from the manager who created that league.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn medium color="success" @click="handleLeagueCreation">{{createTitle}}</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>