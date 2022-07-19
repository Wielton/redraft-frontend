<template>
    <div app>
        <div>
        <HeroComponent />
        </div>
        <div>
        <LandingContentComponent />
        </div>
    </div>
</template>

<script>
import HeroComponent from '@/components/HeroComp.vue';
import LandingContentComponent from '@/components/LandingContentComp.vue'
export default {
  components: { HeroComponent, LandingContentComponent },
    name: 'LandingView'
};
</script>

