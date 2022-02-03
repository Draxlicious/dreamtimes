<template>
    <footer class="footer container ">
        <div class="d-justify">
            <div>
                <p class="opening-detail" >
                    Bendtsens Danas plads 10, 1915 Frederiksberg C <br>
                    Tlf. 2440 0213 <br>
                    Mandag og Tirsdag (Lukket) <br>
                    Onsdag - Fredag 13.00 - 17.30 Lørdag 11.00 - 14.30
                </p>
                <p>
                    <b>
                        <p>Bemærk: Vi sender kun de indrammede værker med posten, efter aftale. De skal venligst afhentes</p>
                        <p>hos Bendtsens på adresse Frederiksberg C. Kontakt Palle på mobil 00 00 00 00</p>
                    </b>
                </p>
            </div>
            <div>
                <a href="https://www.instagram.com/pallewestergaard5/?hl=da" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
            <div class="return-information">
                <a href="#">SHIPPING & RETURNS</a>
                <a href="#">TERMS & PRIVACY</a>
            </div>
    </footer>
</template>


<style scoped>
    .footer{
        text-align: left;
        padding: 5em 18em;
    }

    .opening-detail{
        font-family: "ltc-bodoni-175";
        line-height: 1.4em;
        text-transform: none;
        letter-spacing: 0px;
        font-weight: 400;
        font-style: normal;
        color: #6a6262;
        font-size: 1.3em;
    }

    .b{
        line-height:3
    }

    .d-justify{
        display: flex;
        justify-content: space-between;
    }

    a i{
        color: #333;
        transition: opacity 200ms linear;
    }
    a i:hover{
        opacity: 0.5;
    }

    a{
        color: #333;
    }
    .return-information{
        display: flex;
        justify-content: center;
        padding-top:2em;
    }
    .return-information a{
        padding-left: 1em;
        transition: opacity 200ms linear;
    }
    .return-information a:hover{
        opacity: 0.5;
    }
</style>