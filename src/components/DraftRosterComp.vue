<template>
    
        <v-list>
                <v-list-item v-for="player in managersRoster" :key="player.playerId" :player="player">
                        <!-- <h3 v-if="player.position == 'QB'">QB: {{ player.name }}</h3>
                
                    
                        <h3 v-if="player.position == 'WR'">WR: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'WR'">WR: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'RB'">RB: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'RB'">RB: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'TE'">TE: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'WR' || player.position == 'RB' || player.position == 'TE'">FLEX: {{ player.name }}</h3>
                    
                        <h3 v-if="player.position == 'WR' || player.position == 'RB' || player.position == 'TE'">FLEX: {{ player.name }}</h3> -->
                    </v-list-item>
            </v-list>
            <!-- <v-list-item v-for="player in managersRoster" :key="player.playerId" :player="player">
                <v-list-item-avatar>
                    <v-img height="25" width="25" :src="`${player.logoUrl}`">
                    </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title primary-title></v-list-item-title>
                    <v-list-item-subtitle>{{ player.position }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ player.team }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item> -->
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useRosterStore } from '@/stores/roster'
export default {
    name: 'DraftRosterComp',

    data() {
        return {

            rosterTitle: "ROSTER",
        }
    },
    computed: {
        ...mapState(useRosterStore, ['managersRoster']),


    },
    methods: {
        ...mapActions(useRosterStore, ['getManagerRoster'])
    },
    mounted() {
        this.getManagerRoster();
    }
}
</script>