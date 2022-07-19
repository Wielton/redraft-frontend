<template>
    <v-card
        :player="player">
          
        </v-card>
</template>

<script>
    export default {
        name : 'PlayerCard',
        props: {
            first_name : String,
            last_name : String,
            position : String,
            id : Number
        },
    }
</script>
