import { defineStore } from "pinia";
import cookies from 'vue-cookies';
// import { router } from '@/router';
import axios from 'axios';

export const useLeagueStore = defineStore('leagues',{
    state : ()=>({
        
        leagueList : [],
        inviteKey : String
    }),
    
    actions: {
        async fetchLeagues(){
            axios.request({
            url : process.env.VUE_APP_API_URL+"leagues",
            method : "GET",
            params : {
                "sessionToken" : cookies.get('sessionToken')
            }
        }).then((response)=>{
            this.leagueList = response.data;
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    },
        async createLeague(leagueName){
            axios.request({
            url : process.env.VUE_APP_API_URL+"leagues",
            method : "POST",
            params : {
                "sessionToken" : cookies.get('sessionToken')
            },
            data: {
                leagueName
            },
            }).then((response)=>{
                this.inviteKey = response.data;
                console.log(response)

            }).catch((error)=>{
                console.log(error)
            })
        },
        
    
}
})