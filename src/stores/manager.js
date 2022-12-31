import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'


export const useManagerStore = defineStore('manager',{
    state : () => {
        return{
            
        }   
        
    },
    actions: {
        createManager(email, username, password, firstName, lastName){
            axios.request({
                url:process.env.VUE_APP_API_URL+"manager",
                method : "POST",
                data: {
                    email,
                    username,
                    password,
                    firstName,
                    lastName,
                }
                
            }).then((response)=>{
                cookies.set('sessionToken', response.data.token);
                console.log(cookies.get('sessionToken'));
                router.push({name: 'league-portal'});
            }).catch((error)=>{
                console.log(error);
                this.userRegisterAlert(error);
            })
        },
        userRegisterAlert(error){
            return (error)
        }
        
    },
    
})