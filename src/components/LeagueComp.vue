<template>
  <v-container app fluid>
    <v-row 
      no-gutters>
      <v-col cols="12">
          <h3 class="headline ma-0 pa-6 green--text">Leagues</h3>
          <p class="subheading ma-0 grey--text">
            This lists all the leagues you are currently a member of
          </p>
      </v-col>
      <v-col>
        <router-link :to="({name: ''})"></router-link>
      </v-col>
    </v-row>
      <v-row align="center" justify="center">
        <v-col
          cols="12" sm="6" md="4" lg="4"
          v-for="league in leagueList"
          :key="league.leagueId"
          :league="league">
        <v-card
            >
            <v-card-title
              >
              <router-link :to="({name: 'draftboard'})">{{league.name}}</router-link>
            </v-card-title>
            <v-card-text>
              Record: 0-0-0
              <br />
              Standings: 1st
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {useLeagueSessionStore} from '@/stores/leagueSession'
import {useLeagueStore} from '@/stores/leagues';
import {useRosterStore} from '@/stores/roster'
import {mapActions, mapState} from 'pinia'

  export default {
    name: "LeagueComponent",
    computed: {
      ...mapState(useLeagueStore, ['leagueList']),
      ...mapState(useLeagueStore, ['fetchLeagues']),
    },
    methods: {
      ...mapActions(useLeagueSessionStore, ['getLeague']),
      
      ...mapActions(useRosterStore, ['getRosters']),
      
      
        handleLeagueCreation(){
        
            this.createLeague(this.leagueName);
        },
        handleLeagueRedirect(){
        
            this.getLeague(this.league.leagueId);
        },
        handleError(response){
            console.log(response);
        }
    },
    data: () => ({
      title: "Leagues",
      joinTitle: "Join League",
      createTitle: "Create A League",
      leagueName: "",
      inviteKey: "",
      links: [
        'League',
        'Draft Board',
        'Locker Room',
        'Account',
      ],
      rules: {
        required: value => !!value || "Required.",
      }
    }),
    
    mounted(){
      this.fetchLeagues();
    }
  }
</script>
<style>
  a{
    text-decoration: none;
  }
</style>