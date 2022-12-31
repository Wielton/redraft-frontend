<template>
    <v-container fluid>
    <v-form lazy-validation>
        <v-row class="pa-6 mx-auto">
            <v-col cols="12" md="6" lg="6">
                <v-text-field v-model="loginEmail" label="E-mail" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="6">
                <v-text-field v-model="loginPassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
            </v-col>
                <v-spacer></v-spacer>
            <v-col cols="12" md="6" lg="6">
                <v-card-actions>
                    <v-btn large block color="success" @click="managerLogin(loginEmail,loginPassword)">{{loginTitle}}</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-form>
</v-container>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useManagerLoginStore } from '@/stores/managerLogin';
    export default {
        name: "loginComponent",
        
        data: () => ({
            show1: false,
            verify: "",
            loginEmailRules: [
                v => !!v || "Required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid"
                ],
        }),
        computed: {
            ...mapState(useManagerLoginStore, ['loginTitle']),
            ...mapWritableState(useManagerLoginStore, ['loginEmail','loginPassword'])
        },
        methods: {
            ...mapActions(useManagerLoginStore, ['managerLogin']),
        },
        
        // beforeMount() {
        //     this.store.$onAction(({name, after})=>{
        //     if (name == "userLoginAlert"){
        //         console.log("handling");
        //         after((response)=>{
        //             this.handleError(response);
        //         })
        //     }
        // })
        // }
    }
</script>

<style lang="scss" scoped>

</style>