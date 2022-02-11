<template>
    <section class="grid-section">
            <div v-for="(image, index) in images" :key="index">
                <img class="home-images" :src="image.imagePath" alt="">
            </div>
        </section>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    imagePath: require(`../../assets/static/Forside_1.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Forside_2.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Forside_3.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Forside_4.jpg`)
                },
                {
                    imagePath: require(`../../assets/static/Forside_5.jpg`)
                },
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
    margin-bottom: 2em;
}
</style>