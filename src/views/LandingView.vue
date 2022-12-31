<template>
    <v-container app>
        <v-row>
            <v-col cols="12">
                <HeroComponent />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <LandingContentComponent />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HeroComponent from '@/components/HeroComp.vue';
import LandingContentComponent from '@/components/LandingContentComp.vue'
export default {
  components: { HeroComponent, LandingContentComponent },
    name: 'LandingView'
};
</script>

