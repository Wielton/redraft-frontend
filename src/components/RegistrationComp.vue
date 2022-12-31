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
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Register</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    
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



    export default {
    name: 'RegistrationComponent',
    data: () => ({
        
        
        toolbarTitle: "reDraft",
        
        
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        
        show1: false,
        
    }),
    computed: {
        
    },
    methods: {
        
        
        
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
    
    
    
    };
</script>


    