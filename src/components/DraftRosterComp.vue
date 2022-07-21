<template>
<v-container>
    <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <h1>{{rosterTitle}}</h1>
                <v-divider></v-divider>
                <v-list two-line>
                        <v-list-item v-for="player in managersRoster"
                            :key="player.playerId"
                            :player="player">
                                <v-list-item-avatar>
                                    <v-img
                                    height="25"
                                    width="25"
                                    :src="`${player.logoUrl}`">
                                </v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title primary-title>{{player.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{player.position}}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{player.team}}</v-list-item-subtitle>
                                </v-list-item-content>
                        </v-list-item>
                    </v-list>
            </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import {mapState,mapActions} from 'pinia'
import {useRosterStore} from '@/stores/roster'
export default {
        name: 'DraftRosterComp',
        
        data(){
            return{
                
        rosterTitle: "ROSTER",
            }
        },
        computed: {
            ...mapState(useRosterStore, ['managersRoster']),
            
            
        },
        methods: {
            ...mapActions(useRosterStore, ['getManagerRoster'])
        },
        mounted(){
            this.getManagerRoster();
            }
            }
</script>