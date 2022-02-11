<template>
  <section class="grid-section">
      <!-- <h2>User {{ $route.params.id }}</h2>
      <h1>Hello Image details {{ $route.params.id }}</h1> -->
      <h1>{{id}}</h1>
      <!-- <img :src="images.imagePath" alt="" />
      <p>{{images.title}}</p> -->
      <!-- <div v-for="image in images" :key="image.id">
        <img :src="image.imagePath" alt="" />
        <p>{{image.title}}</p>
      </div> -->

   <img :src="images.imagePath" alt="" />
      

  </section>
</template>

<script>
export default {
  props:['id','images'],
  data() {
    return {
      // image: ['IMG_3920.jpg',]
      // images: [
      //   {
      //       id:1,
      //       title:'image 1',
      //       imagePath: require(`../../assets/static/værk_1.jpg`),
      //   },
      //   {
      //       id:2,
      //       title:'image 2',
      //       imagePath: require(`../../assets/static/værk_2.jpg`),
      //       information: "this is a test for image 2",
      //   },
      //   {
      //       id:3,
      //       title:'image 3',
      //       imagePath: require(`../../assets/static/værk_3.jpg`),
      //   },
      // ],
      computed:{
          destinationId(){
              return parseInt(this.$route.params.id)
          },
          destination(){
              return this.images.find(image => image.id === this.destinationId)
          }
      }
    };
  },
};
</script>

<style scoped>
.grid-section {
  /* display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em; */
}
img {
  width: 100%;
  aspect-ratio: 1;
}
.image-cover {
  position: relative;
}
.image-cover::before {
  content: "";
  transition: all 200ms linear;
}
.image-cover:hover::before {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  height: 100%;
  width: 100%;
  opacity: 1;
  cursor: pointer;
}
.image-information {
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
.image-cover:hover .image-information {
  opacity: 1;
}
</style>