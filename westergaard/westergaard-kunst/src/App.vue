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

h2{
  font-family: "museo-sans",serif;
  font-weight: 100;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-family: "ltc-bodoni-175";
  font-size: 4em;
  line-height: 1em;
  text-transform: none;
  letter-spacing: 0px;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  padding-left: 0px;
  -webkit-backface-visibility: hidden;
}

h1:not(.site-title), h2, h3, h4 {
    font-family: "museo-sans",serif;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.2em;
    font-family: "ltc-bodoni-175";
    line-height: 1.4em;
    text-transform: none;
    letter-spacing: 0px;
    font-weight: 400;
    font-style: normal;
    color: #6a6262;
    margin: 2em 0 1em 0;
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
  color: #fff;
  text-decoration: none;
}
li{
  list-style-type: none;
}

.site--title{
  text-align: center;
  padding: 80px 0;
}
.container{
  padding: 0 15em;
}

</style>
