<template>

    <v-card app>
        <v-list>
            {{title2}}
            <v-list-item 
                v-for="player in rosters"
                :key="player.id"
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

    export default {
        name: 'RosterComponent',
        data(){
            return {
                
            }}
        ,
        
        methods: {
        },
        
            
    }
</script>

<style lang="scss" scoped>

</style>