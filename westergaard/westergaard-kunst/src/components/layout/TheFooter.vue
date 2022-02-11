<template>
    <footer class="footer ">
        <div class="d-justify">
            <div>
                <p class="opening-detail" >
                   www.Westergaards.site <br>
                    Frederiksberg C <br>
                    Tlf. 0045 20868462 (opringning, besked og SMS) <br>
                    pallewestergaard@hotmail.com <br>
                    CVR 37288586

                </p>
                <p>
                    <b>
                        <!-- <p>Bemærk: Vi sender kun de indrammede værker med posten, efter aftale. De skal venligst afhentes</p> -->
                        <p>Ved køb aftales afhentning eller levering fra min side.<br> Ved overdragelsen betaling i form af kontant, bankoverførsel eller mobil pay efter aftale (faktura og kvittering).</p>
                    </b>
                </p>
            </div>
            <div>
                <a href="https://www.instagram.com/pw_kunst/?hl=da" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
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
        margin-top:1em;
        text-align: left;      
    }
    .opening-detail{
        font-family: "ltc-bodoni-175";
        line-height: 1.8em;
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
    a i{
        color: #333;
        margin:0.5em;
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
        padding-bottom: 1em;
        transition: opacity 200ms linear;
    }
    .return-information a:hover{
        opacity: 0.5;
    }
    @media only screen and (max-width: 1263px) {
        footer {
            padding:3em;
        }
        a i{
            margin-top:2em;
            display: flex;
            justify-content: center;
        }
        .return-information{
            flex-direction: column;
        }
        .return-information a{
            text-align: center;
            padding-bottom:0.5em;
        }
    }
    @media only screen and (min-width: 1264px) {
        footer {
            padding: 0 18em;
        }
        .return-information a{
            padding: 2em 1em;
        }
    }
    
    @media only screen and (min-width: 767px) {
        .d-justify{
            display: flex;
            justify-content: space-between;
        }
    }
</style>