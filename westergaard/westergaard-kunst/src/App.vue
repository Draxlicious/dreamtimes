<template>
  <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>

<style>
html{
  font-family : "proxima-nova";
  }

h1{
  font-family: "museo-sans",serif;
  font-size: 72px;
  font-weight: 100;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-family: "ltc-bodoni-175";
  font-size: 54px;
  line-height: 1em;
  text-transform: none;
  letter-spacing: 0px;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  padding-left: 0px;
  -webkit-backface-visibility: hidden;

}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0;
  height:100vh;
}
a{
  color: #333;
  text-decoration: none;
}
li{
  list-style-type: none;
}
img{
    width: 100%;
    height:auto
}
.site--title{
  text-align: center;
  margin: 80px 0;
}
.main-container{
    background-color: rgba(90,90,90,.03);
    padding: 5em 5%;
}
.d-flex{
  display: flex;
  justify-content: center;
}

  @media only screen and (min-width: 767px) {

  }
  @media only screen and (min-width: 1268px) {
    .main-container {
      padding: 5em 20%;
    }
  }

</style>
