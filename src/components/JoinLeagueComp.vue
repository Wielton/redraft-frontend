<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-form ref="joinLeagueForm" lazy-validation>
                    <v-text-field v-model="inviteKey" label="Enter Invite Key" required></v-text-field>
                </v-form>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn medium color="success" @click="handleLeagueJoin">{{joinTitle}}</v-btn>
            </v-col>
        </v-row>
        
        
    </v-container>
</template>

<script>
import {useLeagueStore} from '@/stores/leagues';
import {mapActions} from 'pinia';

    export default {
        name: 'joinLeagueComponent',
        data: () => ({

        }),
        methods: {
            handleLeagueJoin(){
                this.joinLeague(this.inviteKey);
            },
            ...mapActions(useLeagueStore,['joinLeague']),
        }
    }
</script>

<style lang="scss" scoped>

</style>