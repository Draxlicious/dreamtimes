<template>
  <main class="main-container">
      <!-- <h2>User {{ $route.params.id }}</h2>
      <h1>Hello Image details {{ $route.params.id }}</h1> -->
      <h1>{{id}}</h1>
      <!-- <img :src="images.imagePath" alt="" />
      <p>{{images.title}}</p> -->
      <div class="d-flex">
        <img :src="destination.imagePath" class="imageDetails"/>
        <p class="imageInformation">{{destination.information}}</p>
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
.imageDetails{
  width:100%;
}
.d-flex{
  flex-direction: column;
}
@media only screen and (min-width: 1250px) {
  .d-flex{
        flex-direction: row;
    }
  .imageInformation{
      margin: 2em;
    }
  .imageDetails{
    width:50%;
  }
}

</style>