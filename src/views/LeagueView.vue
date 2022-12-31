<template>
    <v-container fluid app>
        <v-row>
            <v-col cols="12">
                <v-list
                    v-for="player in rosters"
                    :key="player.name"
                    :player="player">
                    {{title}}
                    <v-list-item 
                        
                        >
                        {{player.name}}
                        {{player.position}}
                        {{player.team}}
                        </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {useRosterStore} from '@/stores/roster';
import {mapState} from 'pinia';
    export default {
        
        
        computed: {
            ...mapState(useRosterStore, ['title']),
            ...mapState(useRosterStore,['rosters'])
            },
        name: 'LeagueView',
        
    }
</script>

<style lang="sass" scoped>

</style>