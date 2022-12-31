import { defineStore } from "pinia";
import {router} from '@/router'
import cookies from 'vue-cookies';
import axios from "axios";



export const useManagerLoginStore = defineStore('login',{
    state : () => ({
        
            isLoggedIn: false,
            loginPassword: null,
            loginEmail: null,
            loginTitle: 'Login',
        
    }),
    actions: {
        async managerLogin(loginEmail, loginPassword){
            axios.request({
                url: process.env.VUE_APP_API_URL+"manager-login",
                method : "POST",
                data: {
                    loginEmail,
                    loginPassword
                }
            }).then((response)=>{
                cookies.set('sessionToken', response.data.sessionToken);
                console.log(response);
                router.push({name: 'league-portal'});
                // this.isLoggedIn = true;
            }).catch((error)=>{
                // if error logging in: 
                // return a dialog/popup informing that username/password don't match
                // with two button options: 'Try Again' or 'Forgot Password'
                console.log(error);
                
            })
        },
        managerLogout(){
            axios.request({
                url : process.env.VUE_APP_API_URL+"manager-login",
                method : "DELETE",
                params: {
                    'sessionToken' : cookies.get('sessionToken')    
                }
            }).then((response)=>{
                cookies.remove('sessionToken');
                console.log(response);
                router.push('/');
            }).catch((error)=>{
                console.log(error);
            })
        },
        // userLoginAlert(error){
        //     return (error)
        // }
        
    },
    
})