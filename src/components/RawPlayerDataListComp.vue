<template>
    <v-container app>
    <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <h1>{{title1}}</h1>
                <v-divider></v-divider>
                <v-card v-for="player in playerList"
                        :key="player.playerId"
                        :player="player">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{player.playerId}}</h3>
                            <v-spacer></v-spacer>
                            <!-- <v-img
                                height="50"
                                width="50"
                                :src="`${player.logoUrl}`"
                                ></v-img> -->
                        </div>
                        <v-divider></v-divider>
                        <div>
                            <div>
                                <!-- {{player.position}}
                                {{player.team}}
                                {{player.ovrRank}} -->
                            </div>
                            <v-card-actions>
                                <v-btn class="success" @click="popPlayer(player.playerId),addToRosterDB(player.playerId)">Add</v-btn>
                            </v-card-actions>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {mapState,mapActions} from 'pinia'
import {usePlayersStore} from '@/stores/draftList'
import {useRosterStore} from '@/stores/roster'
export default {
        name: 'PlayerListComponent',
        
        data(){
            return{
                
            }
        },
        computed: {
            ...mapState(usePlayersStore, ['title1','playerList']),
            
            
        },
        methods: {
            // ...mapActions(useRosterStore, ['addPlayer']),
            ...mapActions(useRosterStore, ['addToRosterDB']),
            ...mapActions(usePlayersStore, ['fetchPlayers']),
            popPlayer(player){
                for (let i = 0; i < this.playerList.length; i++){
                    if (this.playerList[i] == player){
                        this.playerList.splice(i, 1)
                    }
                        return this.playerList;

        }
    },
        },
            }
</script>

