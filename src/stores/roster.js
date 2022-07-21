import { defineStore } from "pinia";
import axios from "axios";
import cookies from 'vue-cookies';
// import { useLeagueStore } from "./leagues";
// import { router } from '@/router';

export const useRosterStore = defineStore('roster',{
    state : ()=>({
        managersRoster : []
    }),
    // getters: {
    //     leagueIdFunction() {
    //         const league = useLeagueStore()
    //         const leagueId = league.id
    //         return leagueId
    //     }
        
    // },
    actions: {
        addToRosterDB(playerId){
            axios.request({
                url : process.env.VUE_APP_API_URL+"rosters",
                method : "POST",
                params: {
                    'sessionToken' : cookies.get('sessionToken'),
                    playerId
                },
            }).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })
        },
        async getManagerRoster(){
            axios.request({
                url : process.env.VUE_APP_API_URL+"rosters",
                method : "GET",
                params: {
                    'sessionToken' : cookies.get('sessionToken')
                },
                
            }).then((response)=>{
                this.managersRoster = response.data;
                console.log(response);
            }).catch((error)=>{
                console.log(error)
            })
        }
            
        }})
        // addPlayer(name,position){
        //     // iterate through rosters
        //     for (let i = 0;i < this.rosters.length; i++){
        //     // if position vacant then push player into roster
        //     // else if position is filled then do not push
        //     // Once the rosters are all filled out and the draft is complete, 
        //     // iterate through the roster and insert into DB one-by-one
        //         if (position == "QB" && this.rosters.QB.position == null) {
        //             this.rosters.QB.name.push(name);
        //             this.rosters.QB.position.push(position);
        //         }
        //         else if (position == "RB" && this.rosters.RB1.position == null) {
        //             this.rosters.RB1.name.push(name);
        //             this.rosters.RB1.position.push(position);
        //         }
        //         else if (position == "RB" && this.rosters.RB2.position == null) {
        //             this.rosters.RB2.name.push(name);
        //             this.rosters.RB2.position.push(position);
        //         }
        //         else if (position == "WR" && this.rosters.WR1.position == null) {
        //             this.rosters.WR1.name.push(name);
        //             this.rosters.WR1.position.push(position);
        //         }
        //         else if (position == "WR" && this.rosters.WR2.position == null) {
        //             this.rosters.WR2.name.push(name);
        //             this.rosters.WR2.position.push(position);
        //         }
        //         else if (position == "TE" && this.rosters.TE.position == null) {
        //             this.rosters.TE.name.push(name);
        //             this.rosters.TE.position.push(position);
        //         }
        //         else if (position == "RB" || position == "WR" || position == "TE" && this.rosters.FLEX1.position == null) {
        //             this.rosters.FLEX1.name.push(name);
        //             this.rosters.FLEX1.position.push(position);
        //         }
        //         else if (position == "RB" || position == "WR" || position == "TE" && this.rosters.FLEX2.position == null) {
        //             this.rosters.FLEX2.name.push(name);
        //             this.rosters.FLEX2.position.push(position);
        //         }
                
            
        //     this.countDownTimer();
        //     this.resetTimer();
                
        // }},
        //     }}
