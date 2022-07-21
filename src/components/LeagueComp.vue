<template>
  <v-container app>
    <v-row 
      class="mb-6"
      no-gutters
      
    >
      <v-card
        >
        <v-card-title>League Portal</v-card-title>
        <div class="headline mt-3 green--text">Leagues</div>
                <p class="subheading mt-3 grey--text">
                    This lists all the leagues you are currently a member of
                </p>
        
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>
          
        </v-card-text>
    <v-tabs
      dark
      background-color="grey"
      show-arrows
    >
            <v-tabs-slider color="green"></v-tabs-slider>
      <v-tab
        v-for="league in leagueList"
        :key="league.leagueId"
        :league="league"
        
      >
      <router-link to="/draftboard/" @click="handleLeagueRedirect">{{league.name}}</router-link>
      </v-tab>
    </v-tabs>
      </v-card>
    </v-row>
    <v-card 
      class="pa-12"
      outlined
      tile
      style="background-color: lightgrey;"

    >
    <div class="headline mt-3 green--text">League Registration</div>
                <p class="subheading mt-3 grey--text">
                    This is where a user can create or join a league
                    <br>
                    If created, the user will receive an Invite Key to distribute to the users who will join that league 
                    <br>
                    If joining an already created league, the user will join with the given Invite Key from the manager who created that league.
                </p>
    
        <v-card-text>
          
        </v-card-text>
      <v-card-text>
        <v-form ref="joinLeagueForm" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="inviteKey" label="Enter Invite Key" required></v-text-field>
            </v-col>
          </v-row>
        </v-form>
              <v-spacer></v-spacer>
        <v-form ref="createLeagueForm" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="leagueName" cols="12" label="League Name" required></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            
          </v-row>
          <v-row no-gutters>
              <v-btn medium color="success" @click="handleLeagueJoin">{{joinTitle}}</v-btn>

              <v-btn medium color="success" @click="handleLeagueCreation">{{createTitle}}</v-btn>
            </v-row>
        </v-form>
      </v-card-text>
    </v-card>
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
      ...mapActions(useLeagueStore,['joinLeague','createLeague']),
      ...mapActions(useRosterStore, ['getRosters']),
      
      handleLeagueJoin(){
        
            this.joinLeague(this.inviteKey);
        },
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