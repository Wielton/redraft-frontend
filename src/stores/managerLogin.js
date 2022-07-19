import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'


export const useManagerLoginStore = defineStore('managerlogin',{
    state : () => {
        return{
            loginTitle: "Login"
        }   
    },
    actions: {
        async managerSignin(loginEmail, loginPassword){
            axios.request({
                url:process.env.VUE_APP_API_URL+"manager-login",
                method : "POST",
                data: {
                    loginEmail,
                    loginPassword
                }
            }).then((response)=>{
                cookies.set('sessionToken', response.data.sessionToken);
                console.log(response);
                router.push('/league-portal/');
            }).catch((error)=>{
                console.log(error);
            })
        },
        managerLogout(){
            axios.request({
                url : process.env.VUE_APP_API_URL+"manager-login",
                method : "DELETE",
            }).then((response)=>{
                cookies.remove('sessionToken');
                console.log(response);
                router.push('/');
            }).catch((error)=>{
                console.log(error);
            })
        },
        
    },
    
})