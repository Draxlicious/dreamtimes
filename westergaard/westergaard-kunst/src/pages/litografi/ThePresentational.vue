<template>
    Presentational
    <main class="main-container">
        <section class="grid-section">
            <div v-for="(image, index) in images" :key="index">
                <!-- <img :src="require(`../../assets/static/${image}`)" alt=""> -->
                <img :src="image.imagePath" alt="">
            </div>
        </section>
    </main>
</template>

<style scoped>
.grid-section{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}

img{
    height:500px;
    width: 500px;
}
</style>

<script>
export default {
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
                }
            ]
        }
    }
}
</script>