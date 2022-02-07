<template>
    <section class="grid-section">
            <div v-for="(image, index) in images" :key="index" class="image-cover">
                <div class="image-information">
                    {{ image.information }}
                </div>
                    <img :src="image.imagePath" alt="">
                <!-- <img :src="require(`../../assets/static/${image}`)" alt=""> -->
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
                    imagePath: require(`../../assets/static/IMG_3920.jpg`),
                    information: 'Moderne abstrakt og ny ekspressionistisk akvarel af Jon Gislason 11000 kr. (som præsenteret) .13500 kr. (m. beige passepartout & dybrød træramme, eller efter aftale).'
                },
                {
                    imagePath: require(`../../assets/static/IMG_3921.jpg`),
                    information: 'this is a test for image 2'
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
.grid-section{
    /* display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em; */
}
img{
    width: 100%;
    aspect-ratio: 1;
}
.image-cover{
    position: relative;
}
.image-cover::before{
    content:'';
    transition: all 200ms linear;
}
.image-cover:hover::before{
    content:'';
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    color:#fff;
    height: 100%;
    width: 100%;
    opacity: 1;
    cursor: pointer;
    
}
.image-information{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 200ms linear;
    text-shadow: 4px 4px 4px rgba(150, 150, 150, 1);
    cursor: pointer;
    font-style: italic;
    font-family: "ltc-bodoni-175";
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: 700;
}
.image-cover:hover .image-information{
    opacity: 1;
}

</style>