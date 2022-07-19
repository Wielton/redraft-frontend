import { defineStore } from "pinia";
import cookies from 'vue-cookies';
// import { router } from '@/router';
import axios from 'axios';

export const usePlayersStore = defineStore('players',{
    state : ()=>({
        title1: "AVAILABLE PLAYERS",
        playerList : []
    }),
    
    actions: {
        async fetchPlayers(){
            axios.request({
            url : process.env.VUE_APP_API_URL+"players",
            method : "GET",
            params: {
                'sessionToken' : cookies.get('sessionToken')    
            }
        }).then((response)=>{
            this.playerList = response.data;
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    },
    
    
    },
    getters: {
        
        
        
    }
})