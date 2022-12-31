<template>
    <v-container fluid app>
        <v-row>
        <v-col cols="12">
            <v-form lazy-validation>
            <v-row>
                <v-col cols="12">
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-text-field
                    v-model="username"
                    label="Username"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    maxlength="20"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    maxlength="20"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-text-field
                    block
                    v-model="verify"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Confirm Password"
                    counter
                    @click:append="show1 = !show1"
                ></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex" cols="3" sm="3" xsm="3" align-end>
                <v-card-actions>
                    <v-btn
                    large
                    block
                    color="success"
                    @click="
                        createManager(
                        email,
                        username,
                        password,
                        firstName,
                        lastName
                        )
                    "
                    >{{ registerTitle }}</v-btn
                    >
                </v-card-actions>
                </v-col>
            </v-row>
            </v-form>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { useManagerStore } from "@/stores/manager";
import { mapActions } from "pinia";
export default {
    name: "registerComponent",
    data: () => ({
        show: false,
        registerTitle: "Register",
        verify: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
    }),
    methods: {
        ...mapActions(useManagerStore, ["createManager"]),
    },
    mounted() {
        useManagerStore().$onAction(({name, after})=>{
            if (name == "userRegisterAlert"){
                console.log("handling");
                after((response)=>{
                    this.handleError(response);
                })
            }
        })
        
    }
}
</script>

<style lang="css" scoped>
</style>