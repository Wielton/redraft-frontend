<template>
    <v-data-iterator
        :items="playerList"
        :itemsPerPage="itemsPerPage"
        >
        <template v-slot:default="{items}">
        <v-list three-line>
                <v-list-item v-for="player in items" :key="player.playerId" :player="player">
                    <v-list-item-avatar>
                        <v-img :src="`${player.logoUrl}`">
                        </v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ player.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ player.position }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ player.team }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ player.ovrRank }}</v-list-item-subtitle>

                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn class="success" @click="popPlayer(player.playerId), handleAddPlayerToDB">Add</v-btn>
                    </v-list-item-action>
                </v-list-item>
        </v-list>
    </template>
    </v-data-iterator>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePlayersStore } from '@/stores/draftList'
import { useRosterStore } from '@/stores/roster'
export default {
    name: 'PlayerListComponent',

    data() {
        return {
            title1: "AVAILABLE PLAYERS",
            itemsPerPage: 5,
        }
    },
    computed: {
        ...mapState(usePlayersStore, ['playerList']),
    },
    methods: {

        ...mapActions(useRosterStore, ['addToRosterDB']),
        ...mapActions(usePlayersStore, ['fetchPlayers']),

        popPlayer(player) {
            for (let i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i] == player) {
                    this.playerList.splice(i, 1)
                }
                return this.playerList;
            }
        },
        handleAddPlayerToDB() {
            //Some kind of form validation
            this.addToRosterDB(this.player.playerId);
        },
    },
    mounted() {
        this.fetchPlayers();
    }
}
</script>

