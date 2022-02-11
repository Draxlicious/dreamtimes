<template>
    <main class="main-container">
        <home-images></home-images>
        <follow-instagram></follow-instagram>
        <home-content></home-content>
    </main>
</template>

<script>
import HomeImages from '../../components/ui/HomeImages.vue';
import HomeContent from '../../components/ui/home/HomeContent.vue';
import FollowInstagram from '../../components/ui/FollowInstagram.vue';
export default {
  components: { HomeImages, HomeContent, FollowInstagram },
    
}
</script>

<style scoped>



</style>