import { defineStore } from "pinia";
import cookies from 'vue-cookies';
// import { router } from '@/router';
import axios from 'axios';
import router from "@/router";

export const useLeagueSessionStore = defineStore('leagueSession',{
    state : ()=>({
        
    }),
    
    actions: {
        getLeague(leagueId){
            axios.request({
                url : process.env.VUE_APP_API_URL+"league-session",
                method : "GET",
                params : {
                    "sessionToken" : cookies.get('sessionToken'),
                    leagueId
                },
                }).then((response)=>{
                    console.log(response)
                    router.push('/draftboard/')
                }).catch((error)=>{
                    console.log(error)
                })
        },
        joinLeague(inviteKey){
            axios.request({
                url : process.env.VUE_APP_API_URL+"league-session",
                method : "POST",
                params : {
                    "sessionToken" : cookies.get('sessionToken')
                },
                data: {
                    inviteKey
                },
                }).then((response)=>{
                    console.log(response)
                    router.push('/draftboard/')
                }).catch((error)=>{
                    console.log(error)
                })
        }
    
}
})