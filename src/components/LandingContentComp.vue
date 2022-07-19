<template>
    <v-container app>
        <v-layout column>
            <v-flex  class="display-2 text-xs-center my-5 grey--text">How It Works</v-flex>
            <v-flex>
                <div class="headline mt-3 green--text">Initial Draft</div>
                <p class="subheading mt-3 grey--text">
                    Create a league and invite your friends to join
                    <br>
                    Draft before the NFL Regular Season begins
                    <br>
                    Team Roster: 1 QB, 2 RB, 2 WR, 1 TE, 2 FLEX
                    <br>
                    No K, No DEF, No Bench, No Free Agency, No Trades
                </p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3 green--text">Drop Players</div>
                <p class="subheading mt-3 grey--text">
                    Following Monday Night Football
                    <br>
                    Managers are permitted to drop any 4 players
                    <br>
                    Player injured or upcoming bye week?
                    <br>
                    Managers have two options:
                </p>
                <p class="subheading mt-3 grey--text">
                    1. Drop the player
                    <br>
                    - You can feel safe dropping an elite player if he is underperforming
                    <br>
                    - The chances of recouping his value is high
                </p>
                <p class="subheading mt-3 grey--text">
                    2. Stash player
                    <br>
                    - Managers can use two bench spots per year
                    <br>
                    - This is useful for short-term injuries or bye weeks for your top-pick
                </p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3 green--text">reDraft</div>
                <p class="subheading mt-3 grey--text">
                    Before Thursday Night Football
                    <br>
                    Leagues hold a reDraft to fill-out rosters
                    <br>
                    
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'LandingContentComponent'
};
</script>

<style scoped>
</style>