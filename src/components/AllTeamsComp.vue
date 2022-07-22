<template>
    <v-card
        class="mx-auto">
        <v-list>
            {{leagueRostersTitle}}
        <v-list-group
            v-for="manager in allManagersList"
            :key="manager.managerId"
            :manager="manager"
            no-action>
                <template v-slot:activator>
                    <v-list-item-content @click="handleGetAllRosters(manager.managerId)">
                        <v-list-item-title>{{manager.username}}</v-list-item-title>
                    </v-list-item-content>
                </template>
                    <v-list-item
                        v-for="roster in allManagerRosters"
                        :key="roster.playerName"
                        :roster="roster">
                            <v-list-item-content>
                                <v-list-item-title>{{roster.playerName}}</v-list-item-title>
                                <v-list-item-subtitle>{{roster.playerPos}}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{roster.playerTeam}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
        </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
import {mapState,mapActions} from 'pinia'
import {useAllManagersStore} from '@/stores/allManagers'
import {useManagerRosterStore} from '@/stores/managerRosters'
export default {
        name: 'AllTeamsComponent',
        data(){
            return{
                
            leagueRostersTitle: "LEAGUE ROSTERS",
            }
        },
        computed: {
            ...mapState(useAllManagersStore, ['allManagersList']),
            ...mapState(useManagerRosterStore, ['allManagerRosters'])
            
        },
        methods: {
            ...mapActions(useManagerRosterStore, ['getAllManagerRosters']),
            ...mapActions(useAllManagersStore, ['getAllManagers']),
            
            handleGetAllRosters(managerId) {
            this.getAllManagerRosters(managerId);
        },
        
        },
        mounted() {
            this.getAllManagers();
        }
        
            }
</script>