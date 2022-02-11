<template>
    <section class="grid-section">

        <div v-for="image in images" :key="image.id">
            <router-link :to="{ name: 'ImageDetails', params: { id: image.id } }"><h2>{{ image.title }}</h2></router-link>
        </div>

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
                    id: 1,
                    title:'image 1',
                    imagePath: require(`../../assets/static/værk_1.jpg`),
                    information: 'Hans Scherfig: ”Fællesskabet”, 1972. Originalt litografi. 21000 kr.'
                },
                {
                    id: 2,
                    title:'image 2',
                    imagePath: require(`../../assets/static/værk_2.jpg`),
                    information: 'Henry Heerup: ”Hjertets dramatik”. Originalt litografi. 5900 kr.'
                },
                {
                    id: 3,
                    title:'image 3',
                    imagePath: require(`../../assets/static/værk_3.jpg`),
                    information: 'Henry Heerup: ”Øresundsmøde”. Originalt litografi. 3900 kr'
                },
                {
                    id: 4,
                    title:'image 4',
                    imagePath: require(`../../assets/static/værk_4.jpg`),
                    information: 'Henry Heerup: ”Jeg kysser dig veninde…”. Originalt litografi. 2000 kr.'
                },
                {
                    id: 5,
                    title:'image 5',
                    imagePath: require(`../../assets/static/værk_5.jpg`),
                    information: 'Gynter Grass:” Woman in the Halibut”. Koldnåls radering. 12000 kr.'
                },
                {
                    id: 6,
                    imagePath: require(`../../assets/static/værk_6.jpg`),
                    information: 'Jon Gislason: ”Selvportræt”. Akvarel. 11000 kr.'
                },
                {
                    id: 7,
                    imagePath: require(`../../assets/static/værk_7.jpg`),
                    information: 'Anton Roskens: ”Komposition med figurer”. Original litografi. 3500 kr'
                },
                {   
                    id: 8,
                    imagePath: require(`../../assets/static/værk_8.jpg`),
                    information: 'Hans Henrik Lerfeldt: ”Kvinde med græshoppe”. Originalt litografi. 3900 kr.'
                },
                {
                    id: 9,
                    imagePath: require(`../../assets/static/værk_9.jpg`),
                    information: 'Hans Christian Rylander: ”Et ulige forhold”. Originalt litografi. 3200 kr.'
                },
                {
                    id: 10,
                    imagePath: require(`../../assets/static/værk_10.jpg`),
                    information: 'Herman Stilling: ”Den røde trold”. Originalt litografi. 2500 kr.'
                },
                {
                    id: 11,
                    imagePath: require(`../../assets/static/værk_11.jpg`),
                    information: 'Niels Reumert: ”At bære”. Originalt litografi. 2500 kr.'
                },
                {
                    id: 12,
                    imagePath: require(`../../assets/static/værk_12.jpg`),
                    information: 'Pia Andersen: ”Abstrakt, gul, blå, rød”. Originalt litografi. 2400 kr.'
                },
                {
                    id: 13,
                    imagePath: require(`../../assets/static/værk_13.jpg`),
                    information: 'Bent Holstein: ”Pelikanen”. Originalt litografi. 2500 kr.'
                },
                {
                    id: 14,
                    imagePath: require(`../../assets/static/værk_14.jpg`),
                    information: 'John Hartmann:” The Riot”. Originalt litografi. 3600 kr.'
                },
                {
                    id: 15,
                    imagePath: require(`../../assets/static/værk_15.jpg`),
                    information: 'Seppo Mattinen: ”Længsler”. Originalt tryk fra træblok. 4500 kr.'
                },
                {
                    id: 16,
                    imagePath: require(`../../assets/static/værk_16.jpg`),
                    information: 'Barry L. Wilmont: ”Sommernattens smil”. Originalt litografi. 3500 kr.'
                },
                {
                    id: 17,
                    imagePath: require(`../../assets/static/værk_17.jpg`),
                    information: 'Gunleif Grube: ”Passion”. Originalt litografi. 2200 kr.'
                },
                {
                    id: 18,
                    imagePath: require(`../../assets/static/værk_18.jpg`),
                    information: 'Tonny Hørning: ”Særegen skønhed”. Originalt serigrafi. 3900 kr.'
                },
                {
                    id: 19,
                    imagePath: require(`../../assets/static/værk_19.jpg`),
                    information: 'Carl Aage Riget: Festival nr. 2”. Originalt serigrafi tryk. 2200 kr.'
                },
                {
                    id: 20,
                    imagePath: require(`../../assets/static/værk_20.jpg`),
                    information: 'Per Baagøe:” Landevej i Odsherred”. Originalt litografi. 2600 kr.'
                },
                
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
}
.image-cover:hover .image-information{
    opacity: 1;
}

@media only screen and (min-width: 650px) {
  .grid-section{
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
    }
}
@media only screen and (min-width: 1250px) {
  .grid-section{
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2em;
    }
}

</style>