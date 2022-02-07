<template>
    <h2>Presentational</h2>
    <main class="main-container">
        <router-view></router-view>
        <presentational-images></presentational-images>
    </main>
</template>

<script>
import PresentationalImages from '../../components/ui/PresentationalImages.vue'
export default {
  components: { PresentationalImages },
    data() {
        return {
            // image: ['IMG_3920.jpg',]
            images: [
                {
                    imagePath: require(`../../assets/static/IMG_3920.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_3921.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_3924.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_3925.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_3929.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_3949.jpg`)
                }
            ]
        }
    }
}
</script>

<style scoped>
.main-container{
    padding: 5em 10%;
}


</style>