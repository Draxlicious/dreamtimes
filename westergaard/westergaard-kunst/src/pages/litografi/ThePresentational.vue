<template>
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
                    imagePath: require(`../../assets/static/Værk_1.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Værk_2.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Værk_3.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Værk_4.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Værk_5.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Værk_6.jpg`)
                }
            ]
        }
    }
}
</script>
