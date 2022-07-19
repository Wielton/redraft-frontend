<template>
    <v-card app>
        <v-list>
            {{title}}
            <v-list-item 
                v-for="player in rosters"
                :key="player.name"
                :player="player"
                >
                {{player.name}}
                {{player.position}}
                {{player.team}}
                </v-list-item>
        </v-list>
    </v-card>
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