<template>
    <section class="grid-section">
            <div v-for="(image, index) in images" :key="index">
                <!-- <img :src="require(`../../assets/static/${image}`)" alt=""> -->
                <img class="home-images" :src="image.imagePath" alt="">
            </div>
        </section>
</template>

<script>
export default {
    data() {
        return {
            // image: ['IMG_3920.jpg',]
            images: [
                {
                    imagePath: require(`../../assets/static/IMG_4748.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_4755.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/IMG_4758.jpg`)
                },
                // {
                //     imagePath: require(`../../assets/static/IMG_3925.jpg`)
                // },
                // {
                //     imagePath: require(`../../assets/static/IMG_3929.jpg`)
                // },
                // {
                //     imagePath: require(`../../assets/static/IMG_3949.jpg`)
                // }
            ]
        }
    }
}
</script>

<style scoped>
.grid-section{
    /* display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em; */
}
.home-images{
    width: 100%;
    /* aspect-ratio: 1; */
}
</style>