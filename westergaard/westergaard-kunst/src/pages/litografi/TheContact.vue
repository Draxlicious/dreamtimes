<template>
    <main class="main-container">
        <div class="d-flex">
            <img src="https://picsum.photos/500/600" alt="">
            <div class="information-details">
                <h2 class="contact-title">Dream times v. Palle Westergaard</h2>
                <p>Kontakt information samt kontakt format til meddelelser: Palle Westergaard</p>
                <p>Frederiksberg C.</p>
                <p>E-mail: pallewestergaard@hotmail.com</p>
                <p>Mob.:  0045 20868462.</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
img{
    width:100%;
    height: auto;
}
.d-flex{
    /* justify-content: space-between; */
    align-items: center;
    text-align: left;
}
.information-details{
    padding:0 2em;
    color: #333;
}

.contact-title{
    font-weight: 400;
    color: #6a6262;
}

@media only screen and (max-width: 700px) {
  .d-flex {
    flex-direction: column;
  }
  .information-details{
      padding-top: 2em;
      padding-left: 1.5em;
    }
}
@media only screen and (min-width: 1024px) {
  .information-details{
      font-size: 1.5em;
  }
}
</style>