<template>
    <main class="main-container">
        <div class="d-flex">
            <div class="information-details">
                <h2 class="contact-title">Dream times - Palle Westergaard</h2>
                <p>www.westergaards.site</p>
                <p>Instagram: pw_kunst</p>
                <p>Frederiksberg C.</p>
                <p>+ 45 20868462 (opringning, besked og SMS).</p>
                <p>E-mail: pallewestergaard@hotmail.com</p>
                <p>CVR 37288586</p>
            </div>
            <img :src="images.imagePath" alt="">
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return {
            images: {
                    imagePath: require(`../../assets/static/Forside_5.jpg`)
                },
        }
    }
}
</script>

<style scoped>
img{
    width:100%;
    height: auto;
    margin-top: 1em;
}
.d-flex{
    /* justify-content: space-between; */
    align-items: center;
    text-align: left;
    flex-direction: column;
}
.information-details{
    /* padding-top: 2em;
    padding-left: 1.5em; */
    color: #333;
}
.contact-title{
    font-weight: 400;
    color: #6a6262;
}
@media only screen and (min-width: 1250px) {
  .information-details{
      font-size: 1.5em;
  }
  .main-container{
       padding: 2em 15%;
  }
}
</style>