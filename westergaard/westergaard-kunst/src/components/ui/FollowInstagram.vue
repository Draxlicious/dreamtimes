<template>
    <section class="section-container">
        <h2 class="follow-insta-title">Follow westergaards ON</h2>
         <a  href="https://www.instagram.com/pw_kunst/?hl=da" target="_blank"><i class="fab fa-instagram fa-3x"></i><h2 class="follow-instagram-text">INSTAGRAM</h2></a>
    </section>
</template>

<style scoped>
.section-container{
    font-size: 1.3em;
    line-height: 1.4;
}
.section-container h2{
    font-style: italic;
    font-weight: 400;
    color: #6a6262;
    text-transform: uppercase;
    font-size: 1.5em;
}
.section-container a{
    display: flex;
    justify-content: center;
    align-items: center;
}
.section-container a i {
    margin-right:0.3em;
}
.section-container .follow-insta-title{
     margin-bottom:0em;
}
.section-container .follow-instagram-text{
    font-size: 2em;
}

@media only screen and (min-width: 1260px) {
.section-container h2{
    font-size: 2em;
    }
}
</style>