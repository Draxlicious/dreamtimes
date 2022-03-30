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
        //    {
        //         id: 1,
        //         title:'image 1',
        //         imagePath: require(`../../assets/static/news/værk_22.jpg`),
        //         imageDetail1: require(`../../assets/static/news/værk_22_1.jpg`),
        //         imageDetail2: require(`../../assets/static/news/værk_22_2.jpg`),
        //         artist: 'Eugene de Sala, dansk autodidakt kunstmaler med det borgerlige navn, Osvald Lykkeberg Salomonsen, født i Randers 1899 og død i København 1987.',
        //         information: '”Stil life”, originalt litografi, skabt hos U. M. Grafik, København (i dag edition Copenhagen) i 1984, signeret de sala, nr. 153/260, lysmål 40 x 52 cm og rammemål 55 x 66 cm.',
        //         captured: 'Litografi med passepartout og trykt på L ´Aches papir og indrammet med dybblå alu. ramme.',
        //         story: 'De Sala var livet igennem en usædvanlig billedkunstner og person. Han valgte bevidst at provokere med sit grønne hår og hvidpudrede ansigt i 1920-erne. Han omtales som kunstrebellen, der introducerede surrealismen i Danmark, stærkt inspireret af indtryk fra Paris af kunstretningerne da-daisme og kubisme. Der er delte meninger om hans kunst, malerier går til 200000 kr på Arne Bruun Rasmussens kunstauktionerne, men handles også til 1000 kr. En ener i dansk kunst.',
        //         price: '3.300 kr'
        //     },
        //     {
        //         id: 2,
        //         title:'image 2',
        //         imagePath: require(`../../assets/static/news/værk_21.jpg`),
        //         imageDetail1: require(`../../assets/static/news/værk_21_1.jpg`),
        //         imageDetail2: require(`../../assets/static/news/værk_21_2.jpg`),
        //         artist: 'Mogens Andersen, dansk kunstmaler og grafiker, uddannet på maleren Peter Bøyesens malerskole. Født 1916 i København, død 2003 i Hellerup.',
        //         information: '”Beta”, originalt litografi skabt i slutningen af 1980-erne, som del af en serie med Alfa, Beta, Gamma og Delta på U. M. Grafik, København (i dag Edition Copenhagen) med lysmål 56 x 76 cm og rammemål 64 x 83 cm. Signeret M. A.',
        //         captured: 'Litografi indrammet med ”svæv” i en sort træramme og trykt på L`Arches papir.',
        //         story: 'Mogens Andersen var inspireret af den tidlige franske modernisme. Boede fra 1945 til 1965 i Paris var meget optaget af fransk lyrisk-abstrakt kunst, som danner baggrund for hans karakteristiske mørke, dynamiske arabesker på lys bund. Mogens Andersen var bl.a. medlem af en af de mest ansete danske kunstsammenslutninger ”Grønningen”.',
        //         price: '5.500 kr.'
        //     },
                {
                    id: 25,
                    imagePath: require(`../../assets/static/news/værk_25.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_25_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_25_2.jpg`),
                    artist: 'Jørn O. H. Bork er dansk kunstmaler og billedhugger, født 1948 og bosat i dag på Mors. Som kunstner autodidakt.',
                    information: '”Før bristepunktet” er et træsnit trykt i 2011 og signeret J. Bork, nr.212/350, lysmål 23 x 27 cm og rammemål 32 x 38 cm.',
                    captured: '”Før bristepunktet” er indrammet med passepartout og trykt på ”blødt papir” og har en sort træramme.',
                    story: 'Værket er inspireret af en beretning fra Knud Rasmussen, om oraklet, Majuaq, som fortalte om festen for hvalens sjæl og om de smukke tanker, der bliver til i menneskets sind og stiger op som bobler fra havets dyb, bobler, der søger luft for at briste... Jørn O.H. Bork har tilbragt 26 år i Grønland og hans værker er inspireret af egne oplevelser og mange af hans værker af eskimoiske eventyr, myter og sagn, indsamlet bl.a. af polarforskeren, Knud Rasmussen. Se www.bork-billedkunstner.dk',
                    price: '1.500 kr..'
                },
                {
                    id: 26,
                    imagePath: require(`../../assets/static/news/værk_26.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_26_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_26_2.jpg`),
                    artist: 'Anton N. Constant, kaldet ”Constant” er født 1920 i Amsterdam og død 2005 i Utrecht, hollandsk kunstmaler og skulptør og uddannet fra kunsthåndværkerskolen og Rigsakademiet for billedkunst i Amsterdam.',
                    information: '”Dansen” er et originalt litografi trykt i 1980erne i Danmark og formidlet af BØRSEN, www.borsen.dk og signeret Constant, nr. 87/200, lysmål 56 x 40 cm og rammemål 75 x 58 cm.',
                    captured: '”Dansen” er indrammet med passepartout og har en dyb valnøds farvet træramme (www.dinkunst.dk) ',
                    story: 'Constant mødte i Paris Asger Jorn og Karel Appel og sammen med flere andre dannede de COBRA-gruppen i 1948. Som de fleste COBRA kunstnere var han optaget af børnetegninger og kunst som rummer en bevidst naiv motivverden af mennesker, dyr og fabelvæsener. COBRA gruppen omfatter i dag de mest anerkendte moderne kunstnere i Europa fra Belgien, Holland og Danmark.',
                    price: '4.000 kr.'
                }
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