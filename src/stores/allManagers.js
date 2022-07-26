import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';


export const useAllManagersStore = defineStore('allManagers',{
    state : () => {
        return{
            allManagersList : []
        }   
        
    },
    actions: {
        
        async getAllManagers(){
            axios.request({
                url:process.env.VUE_APP_API_URL+"all-managers",
                method : "GET",
                params: {
                    'sessionToken' : cookies.get('sessionToken')
                }
            }).then((response)=>{
                this.allManagersList = response.data;
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    
})