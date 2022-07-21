<template>
    <v-container fluid fill-height app>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="#383838">
                        <v-toolbar-title  class="green--text">{{toolbarTitle}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-expansion-panels accordion>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Login</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-form lazy-validation>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginEmail" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex" cols="2" sm="3" xsm="3" align-end>
                                                <v-card-actions>
                                                <v-btn large block color="success" @click="handleManagerLogin">{{loginTitle}}</v-btn>
                                                </v-card-actions>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Register</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-form lazy-validation>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="email" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="username" label="Username" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="firstName" label="First Name" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="lastName" label="Last Name" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex" cols="3" sm="3" xsm="3" align-end>
                                                <v-card-actions>
                                                <v-btn large block color="success" @click="handleManagerRegistration">{{registerTitle}}</v-btn>
                                                </v-card-actions>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {useManagerLoginStore} from '@/stores/managerLogin';
import {useManagerStore} from '@/stores/manager'
import {mapActions} from 'pinia';

    export default {
    name: 'RegistrationComponent',
    computed: {
    },
    methods: {
        ...mapActions(useManagerStore, ['createManager']),
        ...mapActions(useManagerLoginStore, ['managerSignin']),
        
        handleManagerRegistration(){
            this.createManager(this.email, this.username, this.firstName, this.lastName , this.password, this.pictureUrl);
        },
        handleManagerLogin() {
            this.managerSignin(this.loginEmail, this.loginPassword);
        },
        handleError(response){
            console.log(response);
        }
        // validate() {
        // if (this.$refs.loginForm.validate()) {
        //     // submit form to server/API here...
            
        // }
        // },
        // reset() {
        // this.$refs.form.reset();
        // },
        // resetValidation() {
        // this.$refs.form.resetValidation();
        // }
    },
    // mounted () {
    //     useManagerStore().$onAction(({name, after})=>{
    //         if (name == "userRegisterAlert"){
    //             console.log("handling");
    //             after((response)=>{
    //                 this.handleError(response);
    //             })
    //         }
    //     }),
    //     useManagerLoginStore().$onAction(({name, after})=>{
    //         if (name == "userRegisterAlert"){
    //             console.log("handling");
    //             after((response)=>{
    //                 this.handleError(response);
    //             })
    //         }
    //     })
    // },
    data: () => ({
        loginTitle: 'Login',
        registerTitle: "Register",
        toolbarTitle: "reDraft",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        verify: "",
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        show1: false,
        
    }),
    
    };
</script>


    