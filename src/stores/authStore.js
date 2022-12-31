import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';


export const useAuthStore = defineStore('getAuth',{
    state : () => ({
        isAuthenticated: false,
        job: 'Set authentication'
    }),
    actions: {
        
        getAuthentication(){
            axios.request({
                url:process.env.VUE_APP_API_URL+"manager",
                method : "GET",
                params: {
                    'sessionToken' : cookies.get('sessionToken')
                }
            }).then((response)=>{
                if(response){
                    this.isAuthenticated = true
                }
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    
})