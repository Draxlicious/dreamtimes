<template>
  <main class="main-container">
      <!-- <h2>User {{ $route.params.id }}</h2>
      <h1>Hello Image details {{ $route.params.id }}</h1> -->
      <!-- <h1>{{id}}</h1> -->
      <!-- <img :src="images.imagePath" alt="" />
      <p>{{images.title}}</p> -->
      
      <div class="d-flex">
        <img :src="destination.imagePath" class="imageDetails"/>
        <div class="imageInformation">
            <h2 class="imageInformation--artist">{{ destination.artist }}</h2>
            <hr>
            <p class="imageInformation--price">{{ destination.price }}</p>
            <p class="imageInformation--price">{{ destination.priceWithFrame }}</p>
            <p class="imageInformation--information">{{ destination.information }}</p>
            <p class="imageInformation--information">{{ destination.captured }}</p>
            <p class="imageInformation--information">{{ destination.story }}</p>
            <div class="arrow-back--container">
                <router-link :to="{ name: 'NewsPage' }"><i class="fa-solid fa-arrow-left fa-2x"></i></router-link>
            </div>
        </div>
        
      </div>
      <div class="extra_images">
        <img :src="destination.imageDetail1" class="imageDetails"/>
        <img :src="destination.imageDetail2" class="imageDetails"/>
        <img :src="destination.imageDetail3" class="imageDetails"/>
      </div>

  </main>
</template>

<script>
// import sourceData from '@/data.json'
export default {
  props: ['id'],
  data(){
     return{
       images: [
                {
                    id: 1,
                    title:'image 1',
                    imagePath: require(`../../assets/static/news/værk_21.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_21_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_21_2.jpg`),
                    artist: 'Moderne, originalt dansk litografi (kunsttryk) af Hans Scherfig (f. København 1905, d. Fredensborg 1979).',
                    information: '”Fællesskabet” sign. Scherfig 1972, nr. 242/280. Litografi i farver. Lysmål 41 x 60 cm. Rammemål 63 x 80 cm.',
                    captured: 'Indrammet med knækket hvid passepartout og gylden træramme med en grå stribe. Trykt på L´Arches papir på U.M. Grafik´s værksted i dag Edition København (www.editioncopenhagen.com)',
                    story: 'Et sjældent værk skabt som kunstnerens kommentar til Danmarks indmeldelse i EU i 1972. Scherfig var imod.',
                    price: '21.500 kr.'
                },
                {
                    id: 2,
                    title:'image 2',
                    imagePath: require(`../../assets/static/news/værk_22.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_22_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_22_2.jpg`),
                    artist: 'Moderne, originalt dansk litografi (kunstryk) af Henry Heerup (f. Frederiksberg 1907, d. 1993 i Rødovre).',
                    information: '”Hjertets Dramatik” sign. Heerup. Trykt 1969, nr. 73/310. Litografi i farver. Lysmål 41 x 60 cm. Rammemål 63 x 80 cm. Sjældent udbudt.',
                    captured: 'Indrammet med knækket hvid passepartout og sølvfarvet træramme. Trykt på Arches papir på I. Chr. Sørensens værksted i Hjørring. I dag Hjørring Grafisk Værksted (www.hgv.dk) ',
                    story: 'For Heerup var kunsten og legen 2 sider af samme sag. Hans kunst kredsede omkring kvinden, familien og det levede liv. Han var selverklæret formand for nisserne, fløjtespiller, elskede katte, nøgenbader og cyklede til sin sidste dag. Han var grafiker, maler, stenhugger og skraldemodels skaber.  Se Heerup museet i Rødovre (www.heerup.dk).',
                    price: '5.900 kr.'
                },       
            ]
     }
  },
  computed:{
    destinationId(){
          return parseInt(this.$route.params.id)
      },
      destination(){
          return this.images.find(destination => destination.id === this.destinationId)
          
      }
  }
};
</script>

<style scoped>
.arrow-back--container{
    text-align: left;
    margin: 2em 0;
}
.imageDetails{
  width: 100%;
  margin: 1em 0;
}
.d-flex{
  flex-direction: column;
}
hr{
    max-width: 2em;
    margin: 2em 0;
}
.imageInformation{
    text-align: left;
}
.imageInformation--artist{
    color: #6a6262;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.4em;
    text-transform: none;
    letter-spacing: 0px;
    font-style: normal;
    font-size: 28px;
    line-height: 1.25em;
}
.imageInformation--price{
    margin: 0 0.825em 1em 0;
    color: #6a6262;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.25em;
}
.imageInformation--information{
    color: #333;
    font-family: "ff-meta-web-pro",sans-serif;
    font-weight: normal;
    line-height: 1.6em;
    font-family: "proxima-nova";
    font-size: 20px;
    line-height: 1.8em;
    text-transform: none;
    letter-spacing: 0px;
    font-weight: 300;
    font-style: normal;
    color: #6a6262;
}

.extra_images{
    text-align: left;
}
@media only screen and (min-width: 650px) {
  .d-flex{
        flex-direction: column;
    }
  .imageInformation{
      margin: 0 2em;
    }
}
@media only screen and (min-width: 1250px) {
  .d-flex{
        flex-direction: row;
        min-width: 1000px;
    }
  .imageInformation{
      margin: 0 2em;
      max-width: 30%;
    }
    .main-container {
        padding: 5em 15%;
    }
    .imageDetails{
        width: 70%;
    }
}

@media only screen and (max-width: 1649px) and (min-width: 1250px)  {
    .main-container{
        padding: 0 3%;
    }
}
@media only screen and (max-width: 2250px) and (min-width: 1650px)  {
    .main-container{
        padding: 0 15%;
    }
}

</style>