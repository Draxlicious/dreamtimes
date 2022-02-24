<template>
    <section class="main-container grid-section">

        <!-- <div v-for="image in images" :key="image.id">
            <router-link :to="{ name: 'ImageDetails', params: { id: image.id } }"><h2>{{ image.title }}</h2></router-link>
        </div> -->

            <div v-for="(image, index) in images" :key="index" class="image-cover">
                 <router-link :to="{ name: 'NewsDetails', params: { id: image.id } }">
                    <div class="image-information">
                        {{ image.information }}
                    </div>
                <img :src="image.imagePath" alt="">
                </router-link>
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
                    id: 1,
                    title:'image 1',
                    imagePath: require(`../../assets/static/news/værk_22.jpg`),
                    information: 'de sala: Still Life. Original litografi. 3300 kr.'
                },
                {
                    id: 2,
                    title:'image 2',
                    imagePath: require(`../../assets/static/news/værk_21.jpg`),
                    information: 'Mogens Andersen: “Beta”. Originalt litografi 5900 kr.'
                }     
            ]
        }
    }
}
</script>

<style scoped>
.grid-section{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
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
    background-color: rgba(255, 255, 255, 0.5);
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
    min-width: 10em;
    height:100%;
    width:100%;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
}
.image-information::after{
    content:'Show Details';
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: all 200ms linear;
    text-shadow: 4px 4px 4px rgba(150, 150, 150, 1);
    cursor: pointer;
    font-style: italic;
    font-family: "ltc-bodoni-175";
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: 700;
    min-width: 10em;
    height:2.2em;
    background-color:#fff;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
}

.show-details{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: all 200ms linear;
    text-shadow: 4px 4px 4px rgba(150, 150, 150, 1);
    cursor: pointer;
    font-style: italic;
    font-family: "ltc-bodoni-175";
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: 700;
    min-width: 100%;
    min-height:2.2em;
    background-color:#fff;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    opacity:0;
    border:none;
}

.image-cover:hover .image-information{
    opacity: 1;
}
.image-cover:hover .show-details{
    opacity: 1;
}

@media only screen and (min-width: 650px) {
  .grid-section{
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
    }
    .show-details{
        min-width: 75%;
    }
}
@media only screen and (min-width: 1250px) {
  .grid-section{
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em;
    }
}
</style>