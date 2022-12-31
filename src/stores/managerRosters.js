import { defineStore } from "pinia";
import axios from "axios";
// import { useLeagueStore } from "./leagues";
// import { router } from '@/router';

export const useManagerRosterStore = defineStore('managerRosters',{
    state : ()=>({
        
        allManagerRosters : []
    }),
    // getters: {
    //     leagueIdFunction() {
    //         const league = useLeagueStore()
    //         const leagueId = league.id
    //         return leagueId
    //     }
        
    // },
    actions: {
        
        async getAllManagerRosters(managerId){
            axios.request({
                url: process.env.VUE_APP_API_URL+"all-manager-rosters",
                method : "GET",
                params: {
                    managerId
                }
            }).then((response)=>{
                this.allManagerRosters = response.data;
            }).catch((error)=>{
                console.log(error)
            })},
            
        }})