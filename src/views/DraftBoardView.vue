<template>
<v-container app>
    <v-row>
            <v-col
            cols="12"
            sm="4"
            >
            <v-sheet
                rounded="lg"
                min-height="268"
                >
                <DraftRosterComp/>
                </v-sheet>
            </v-col>

            <v-col
            cols="12"
            sm="4"
            >
            <v-sheet
                rounded="lg"
                min-height="268"
                >
                <AllTeamsComp/>
            </v-sheet>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            >
                
                <v-sheet
                id="scrolling-techniques-4"
                class="overflow-y-auto"
                rounded="lg"
                max-height="600"
                >
                <RawPlayerDataListComp/>
                </v-sheet>
            </v-col>
        </v-row>
</v-container>
    
</template>

<script>
import DraftRosterComp from '@/components/DraftRosterComp.vue'
import RawPlayerDataListComp from '@/components/RawPlayerDataListComp.vue'
import AllTeamsComp from '@/components/AllTeamsComp.vue'
// import RosterComp from '@/components/RosterComp.vue'



export default {
        name : 'DraftBoard',
        
        components: {
                RawPlayerDataListComp,
                DraftRosterComp,
                AllTeamsComp
                // RosterComp
            
        },
        data: () => {
            return {
                
            }
        },
        computed: {
            
        },
        methods: {
            // 60 second countdown timer for when league members are partaking in a 'LIVE' draft format.
            //   **future feature**
            // countDownTimer() {
            //     if(this.countDown > 0) {
            //         setTimeout(() => {
            //             this.countDown -= 1
            //             this.countDownTimer()
            //         }, 1000)
            //     }
            // },
            // resetTimer(){
            //     this.countDown = 60
            // },
},

}
</script>
