<template>
  <v-app app>
    <v-list>
      {{title}}
      <v-list-item
        v-for="league in leagueList"
        :key="league.leagueId"
        :league="league"
      >
      <v-btn :to="'/draft-board/'" @click="getLeague(league.leagueId)">{{league.name}}</v-btn>
      </v-list-item>
    </v-list>

    <v-card class="px-12">
      <v-card-text>
        <v-form ref="joinLeagueForm" lazy-validation>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field v-model="inviteKey" label="Enter Invite Key" required></v-text-field>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex" cols="2" sm="2" xsm="2">
                                            <v-btn large block color="success" @click="joinLeague(inviteKey)">{{joinTitle}}</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
        <v-form ref="createLeagueForm" lazy-validation>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="leagueName" label="League Name" required></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="2" sm="2" xsm="2">
              <v-btn large block color="success" @click="createLeague(leagueName)">{{createTitle}}</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import {useLeagueSessionStore} from '@/stores/leagueSession'
import {useLeagueStore} from '@/stores/leagues';
import {useRosterStore} from '@/stores/roster'
import {mapActions, mapState} from 'pinia'

  export default {
    name: "LeagueComponent",
    computed: {
      ...mapState(useLeagueStore, ['title','joinTitle','createTitle']),
      ...mapState(useLeagueStore, ['leagueList']),
      ...mapState(useLeagueStore, ['fetchLeagues']),
    },
    methods: {
      ...mapActions(useLeagueSessionStore, ['getLeague']),
      ...mapActions(useLeagueStore,['joinLeague','createLeague']),
      ...mapActions(useRosterStore, ['getRosters'])
    },
    data: () => ({
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