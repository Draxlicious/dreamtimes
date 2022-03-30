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
                <router-link :to="{ name: 'PresentationalPage' }"><i class="fa-solid fa-arrow-left fa-2x"></i></router-link>
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
                {
                    id: 1,
                    title:'image 1',
                    imagePath: require(`../../assets/static/details/detail_1.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_1_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_1_2.jpg`),
                    artist: 'Moderne, originalt dansk litografi (kunsttryk) af Hans Scherfig (f. København 1905, d. Fredensborg 1979).',
                    information: '”Fællesskabet” sign. Scherfig 1972, nr. 242/280. Litografi i farver. Lysmål 41 x 60 cm. Rammemål 63 x 80 cm.',
                    captured: 'Indrammet med knækket hvid passepartout og gylden træramme med en grå stribe. Trykt på L´Arches papir på U.M. Grafik´s værksted i dag Edition København (www.editioncopenhagen.com)',
                    story: 'Et sjældent værk skabt som kunstnerens kommentar til Danmarks indmeldelse i EU i 1972. Scherfig var imod.',
                    price: '21.500 kr.'
                },
                {
                    id: 2,
                    title:'image 2',
                    imagePath: require(`../../assets/static/details/detail_2.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_2_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_2_2.jpg`),
                    artist: 'Moderne, originalt dansk litografi (kunstryk) af Henry Heerup (f. Frederiksberg 1907, d. 1993 i Rødovre).',
                    information: '”Hjertets Dramatik” sign. Heerup. Trykt 1969, nr. 73/310. Litografi i farver. Lysmål 41 x 60 cm. Rammemål 63 x 80 cm. Sjældent udbudt.',
                    captured: 'Indrammet med knækket hvid passepartout og sølvfarvet træramme. Trykt på Arches papir på I. Chr. Sørensens værksted i Hjørring. I dag Hjørring Grafisk Værksted (www.hgv.dk) ',
                    story: 'For Heerup var kunsten og legen 2 sider af samme sag. Hans kunst kredsede omkring kvinden, familien og det levede liv. Han var selverklæret formand for nisserne, fløjtespiller, elskede katte, nøgenbader og cyklede til sin sidste dag. Han var grafiker, maler, stenhugger og skraldemodels skaber.  Se Heerup museet i Rødovre (www.heerup.dk).',
                    price: '5.900 kr.'
                },
                {
                    id: 3,
                    title:'image 3',
                    imagePath: require(`../../assets/static/details/detail_3.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_3_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_3_2.jpg`),
                    artist: 'Moderne, originalt dansk litografi (kunstryk) af Henry Heerup (f. Frederiksberg 1907, d. 1993 i Rødovre).',
                    information: '”Øresundsmøde”, sign. Heerup. Trykt 1970, nr. 76/150. Litografi i farver. Lysmål 64 x 75 cm. Rammemål 70 x 90 cm. Sjældent udbudt.',
                    captured: 'Indrammet med knækket hvid passepartout og gylden træramme. Trykt på Arches papir af Sandberg, Galerie Börjeson, Malmø.',
                    story: 'For Heerup var kunsten og legen 2 sider af samme sag. Hans kunst kredsede omkring kvinden, familien og det levede liv. Han var selverklæret formand for nisserne, fløjtespiller, elskede katte, nøgenbader og cyklede til sin sidste dag. Han var grafiker, maler, stenhugger og skraldemodels skaber.  Se Heerup museet i Rødovre (www.heerup.dk).',
                    price: '3.900 kr.'
                },
                {
                    id: 4,
                    title:'image 4',
                    imagePath: require(`../../assets/static/details/detail_4.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_4_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_4_2.jpg`),
                    artist: 'Moderne, originalt dansk original litografi (kunsttryk) af Henry Heerup (f. Frederiksberg 1907, d. 1993 i Rødovre).',
                    information: '”Jeg kysser dig veninde…”, sign Heerup, Trykt 1977, nr. nummeret (E.A). Litografi i farver. Lysmål 48 x 61. Rammemål 55 x 73 cm. Sjældent udbudt.',
                    captured: 'Indrammet med knækket beige passepartout og gylden trætræramme. Trykt på Arches papir af I. Chr. Sørensen, Hjørring for Louisiana kunstmuseum.',
                    story: 'For Heerup var kunsten og legen 2 sider af samme sag. Hans kunst kredsede omkring kvinden, familien og det levede liv. Han var selverklæret formand for nisserne, fløjtespiller, elskede katte, nøgenbader og cyklede til sin sidste dag. Han var grafiker, maler, stenhugger og skraldemodels skaber.  Se Heerup museet i Rødovre (www.heerup.dk).',
                    price: '2.000 kr. Uden ramme ',
                    priceWithFrame: '3.400 kr. Indrammet'
                },
                {
                    id: 5,
                    title:'image 5',
                    imagePath: require(`../../assets/static/details/detail_5.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_5_1.jpg`),
                    artist: 'Moderne, original koldnåls radering af Gynter Grass (f. 1927 i Gdansk i Polen, d. 2015 i Lybeck, Tyskland).',
                    information: '”Woman in the Halibut”, sign. Gynter Grass, trykt i 1983, nr. XII/L. Koldnålsradering i sort/hvid. Lysmål 17 x 24 cm. Rammemål 50 x 64 cm. Meget sjældent udbudt.',
                    captured: 'Indrammet u. passepartout med grafisk tryk i papiret og med en sort alu. ramme. Trykt på grafisk papir.',
                    story: 'Gynter Grass var uddannet stenhugger og grafiker. Modtog som forfatter Nobelprisen i litteratur for ”Bliktrommen” et kæmpe værk om tysk efterkrigstid og historie. Parallelt med grafiker med forkærlighed for fisk, rotter og frøer i groteske betydninger.',
                    price: '12.000 kr.'
                },
                {
                    id: 6,
                    imagePath: require(`../../assets/static/details/detail_6.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_6_1.jpg`),
                    artist: 'Moderne abstrakt og ny ekspressionistisk akvarel af Jon Gislason født 1955 i Ry, Danmark.',
                    information: '”Selvportræt” sign. Jon Gislason, malet i 1990. Lysmål 56 x 74 cm. Rammemål 60 x 80 cm. Unika.',
                    captured: 'Indrammet u. passepartout på håndlavet bøttepapir med sølvfarvet alu. ramme.',
                    story: 'Jon Gislason er en af Danmarks kendte internationale kunstnere fra store udstillinger herhjemme og i Tokyo, New York, Rotterdam m.v. Jon Gislason er super farve ekspressionist beslægtet med 1980-ernes og 1990-ernes ”vilde maleri”. ( www.jongislason.dk ).',
                    price: '11.000 kr.',
                    priceWithFrame: '13.500 kr. (m. beige passepartout & dybrød træramme, eller efter aftale).'
                },
                {
                    id: 7,
                    imagePath: require(`../../assets/static/details/detail_7.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_7_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_7_2.jpg`),
                    artist: 'Moderne non figurativt og originalt litografi af Anton Roskens f. 1906 i Griendveen og d. 1976ni Amsterdam.',
                    information: '”Komposition med figurer”, originalt farve litografi, trykt i 1967. Nr. 98/100. Lysmål 30 x 38 cm. Rammemål 41 x 49 cm. ',
                    captured: 'Indrammet uden passepartout på håndlavet bøttepapir med mat sølvfarvet alu. ramme',
                    story: 'Anton Roskens var autodidakt kunstner inspireret af afrikansk kunst og siden af COBRA kunsten, specielt i samspil med Appel, Corneille og Constant. (nl.wikipedia.org)',
                    price: '3.500 kr.',
                    priceWithFrame: '5.500 kr (indramning efter aftale)'
                },
                {   
                    id: 8,
                    imagePath: require(`../../assets/static/details/detail_8.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_8_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_8_2.jpg`),
                    artist: 'Moderne surrealistisk originalt litografi af Hans Henrik Lerfeldt f. 1946 i Århus og d. 1989 i København, uddannet fra det Kongelige Danske Kunstakademi.',
                    information: '”Kvinde med græshoppe”, farve litografi, trykt 1988 nr. LII/CXVI. Lysmål 30 x 40 cm. Rammemål 49 x 61 cm. Signeret Lerfeldt.',
                    captured: 'Indrammet med passepartout på Arches papir med mat sølvfarvet træramme.',
                    story: 'Lerfeldt var inspireret af Wilhelm Freddies erotiske surrealisme og var fornyer af genren. Kvinden var hans foretrukne motiv. Hans kunst erotisk, ofte sadomasochistiske scener med kvinder og insekter. Han malede med en fotografisk præcision. Jazz kyndig og elsker. En ener i dansk kunst.',
                    price: '3.900 kr.'
                },
                {
                    id: 9,
                    imagePath: require(`../../assets/static/details/detail_9.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_9_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_9_2.jpg`),
                    artist: 'Moderne ekspressionistisk og surrealistisk originalt farve litografi af Hans Christian Rylander f. 1939 i København og d. 2021 i Nykøbing Falster. Uddannet lærer og fra Kunstakademiets kunstpædagogiske skole i København.',
                    information: '”Et ulige forhold”, farve litografi, trykt i 19 farver 1987. Nr. 126/150. Lysmål 49 x 68. Rammemål 65 x 87 cm. Signeret H C Rylander.',
                    captured: 'Indrammet med passepartout og trykt på på D’Arches papir og med forgyldt alu ramme. Trykt hos UM Grafik København i dag Edition Copenhagen. www.editioncopenhagen.com',
                    story: 'Rylander, som blev omtalt som en civiliseret anarkist, sagde han malte mennesker drømme og længsler. I 2004 færdiggjorde Rylander den næsten 100 meter lange udsmykning, ”Erindringsøjeblikke” af Proviantgården på Christiansborg. Et hovedværk, der tog 14 år at færdiggøre. Endnu en ener i dansk nutidig kunst.',
                    price: '3.200 kr.'
                },
                {
                    id: 10,
                    imagePath: require(`../../assets/static/details/detail_10.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_10_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_10_2.jpg`),
                    artist: 'Maler, grafiker og forfatter Herman Stillings originale farve litografi er med en rød trold. Han er f. 1925 i København og d. 1996 i København. Han var uddannet på Kunstakademiet og troldene blev hans kunstneriske skæbne.',
                    information: '”Den røde trold”, farve litografi, trykt i 1986. Nr. 196/270. Lysmål 37 x 48 cm. Rammemål 40 x 48 cm. Signeret Herman Stilling',
                    captured: 'Indrammet med lys passepartout og trykt på D´Arches papir med sølvfarvet alu. ramme. Trykt hos UM Grafik, København (i dag Edition Copenhagen). (www.editioncopenhagen.com)',
                    story: 'Herman Stilling gik ud af 6. klasse, var ordblind og havde en talefejl, ikke desto mindre blev han forfatter (bl.a. ”En dreng ved navn Herman”) og en værdsat foredragsholder med sin venlighed og humor. Troldene blev hans varemærke, og han koncentrerede sig i lange perioder om collage af f.eks. bordben og om grafikken med mennesker, ikke mindst børn, som gennemgående motiv. I 2003 blev Herman Stillings Museum oprettet i de gamle stalde tilhørende Assistens kirkegård på Nørrebro, København (www.hermanstillingmuseet.dk). På gravstenen formet som et hjerte står der ”HERMAN”.',
                    price: '2.500 kr.'
                },
                {
                    id: 11,
                    imagePath: require(`../../assets/static/details/detail_11.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_11_1.jpg`),
                    artist: 'Niels Reumert er ekspressionist, maler og grafiker og står bag en serie af små farve litografier med bl.a. børn som motiv, her ”At bære”, født i Hellerup i 1949. Han er maler og grafiker og uddannet på Kunstakademiet.',
                    information: '”At bære”, originalt farve litografi er trykt i 1989. Nr. 107/120. Lysmål 24 x 27 cm. Rammemål 36 x 41 cm.',
                    captured: 'Indrammet med beige passepartout og trykt på D´Arches papir med guld farvet alu. ramme. Trykt første gang og i lille oplag hos UM Grafik, København (i dag Copenhagen Edition). ( www.editioncopenhagen.com)',
                    story: 'Niels Reumert er maler og grafiker og uddannet på Kunstakademiet og debuterede i 1974 sammen med kunstnersammenslutningen ”Violet sol”. Han er inspireret af etnografika og venners postkort og skaber litografier, raderinger, keramiske krukker og fade, ofte med ”masken” som motiv. Reumert er ekspressionist til fingerspidserne og en voldsom som sådan. Han var en af de betydeligste kunstnere i den legendariske nu nedlagte kunstnergruppe ”Violet sol” (1971-88)',
                    price: '2.500 kr.'
                },
                {
                    id: 12,
                    imagePath: require(`../../assets/static/details/detail_12.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_12_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_12_2.jpg`),
                    artist: 'Pia Andersen arbejder med originalt litografi, maleri, glas og keramik. Født 1960 i Frederikshavn. Uddannet på kunsthåndværkerskolen i Kolding og Kunstakademiet i Krakow.',
                    information: '”Abstrakt, gul, blå, rød”, farvelitografi trykt i 2002. Tryk nr. 15/150. Lysmål 21 x 29 cm. Rammemål 36/43 cm. Signeret Pia Andersen.',
                    captured: 'Indrammet med beige passepartout og trykt på D´Arches papir og med hvidpigmenteret træramme. Trykt af Edition Copenhagen (www.editioncopenhagen.com).',
                    story: 'Pia Andersens ”konstruktivistiske” og organiske billeder åbner sig på forskellig måde for betragteren.  Hendes inspiration er landskabet, bjergene, årstider, sollyset, disen i varmen, insekter svirren, stubbene på marken og stærke farver.',
                    price: '2.400 kr.'
                },
                {
                    id: 13,
                    imagePath: require(`../../assets/static/details/detail_13.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_13_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_13_2.jpg`),
                    artist: 'Bent Holstein. Maler og grafiker, født i København i 1942. Han er autodidakt og har skrevet om- og lavet film bl.a. for DR om kunst.',
                    information: '”Pelikanen”, originalt farve litografi trykt i 1975. Tryk 244/300. Lysmål 55 x 74 cm. Rammemål 75 x 90 cm. Signeret Holstein.',
                    captured: 'Indrammet med lyst passepartout og trykt på D´Arches papir og med gylden alu. Ramme. Trykt hos Hostrup- Pedersen og Johansen, Valby, København (www.litoggrafisk.dk) ',
                    story: 'Holstein skildrer de kolde realiteters Verden, varmet af en personlig poesi, der viser en stærk interesse for det truede miljø. Formerne er forenklede, farverne varme jordfarver, og han inspireret af utallige rejser, bl.a. i Sydeuropa. Motivisk maler sjældent mennesker, derimod dyr, landskaber og arkitektur.',
                    price: '2.500 kr.'
                },
                {
                    id: 14,
                    imagePath: require(`../../assets/static/details/detail_14.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_14_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_14_2.jpg`),
                    artist: 'John Hartmann. Maler og grafiker født i Canada, Ontario, 1950, uddannet fra McMaster University i Hamilton 1973. Bosat i Canada.',
                    information: '”The Riot”, originalt farvelitografi trykt ca. 1984. Tryk 82/190. Lysmål 54 x 71 cm. Rammemål 72 x 88 cm.',
                    captured: 'Indrammet med lyst passepartout og trykt på D´Arches papir og med sølvfarvet alu. Ramme. Trykt hos U.M. Grafik, København, i dag Copenhagen Edition (www.editioncopenhagen.com). Sjældent udbudt.',
                    story: 'Hartman er inspireret af bl.a. J.M.W. Turner og Oskar Kokoschaka. Han har fokuseret på landskabet og samtidig på byer som levende organismer, deres historie og erindringer. Hans bekymring er den vestlige civilisations adskillelse fra det levende land og menneskene. Han har rejst over hele Verdenen og opholdt sig i Danmark i 80erne og udførte litografiet ”The Riots” for U.M.Grafik. Han er en højt estimeret kunstner i Canada i dag (www.johnhartman.ca).',
                    price: '3.600 kr.'
                },
                {
                    id: 15,
                    imagePath: require(`../../assets/static/details/detail_15.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_15_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_15_2.jpg`),
                    artist: 'Seppo Mattinen, finsk maler og grafiker f. 1930 i Helsingfors, Finland og d. 2022 i København. Uddannet på Kunstakademiet i København.',
                    information: '”Længsler”, et originalt træsnit trykt i farver i 1978. Tryk nr. 96/200. Lysmål 43/51 cm og rammemål 63/71. Signeret Seppo Mattinen.',
                    captured: 'Indrammet med lyst passepartout og trykt på grafisk papir og med en gylden træramme. Udgivet af Clausens kunsthandel, København (www.clausenskunshandel.dk)',
                    story: 'Mattinen havde en stor del af sit virke Danmark. Hans gennemgående stemning er det humoristiske, underfundige og sørgmodige indtryk fra episoder og handlingsforløb mellem mennesker på landet og i byen, men menneskefigurerne er ofte tynde skikkelser, der er stivnede uden kontakt med hinanden, og dog med en erotisk og nordisk stemning, hændelser i en barokt-naivistisk udtryksform. Mattinen var træsnittets mester.',
                    price: '4.500 kr.'
                },
                {
                    id: 16,
                    imagePath: require(`../../assets/static/details/detail_16.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_16_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_16_2.jpg`),
                    artist: 'Barry Lereng Willmont, f. 1936 I Canada, maler, grafiker og forfatter. Uddannet på Kunstakademiet på København.',
                    information: '”Sommernattens smil”, originalt litografisk farve tryk fra 1988 nr. 72/90. Lysmål 55/72. Rammemål 72/90. Signeret Wilmont.',
                    captured: 'Indrammet med lyst passepartout og trykt på D´Arches papir og med en sølvfarvet alu ramme. Trykt af U.M. Grafik, København, i dag Edition Copenhagen (www.editioncopenhagen.com).',
                    story: 'Willmont har siden sin ungdom haft København som sit faste udgangspunkt. Wilmonts kunst næres af myter fra mange forskellige folkeslag, herunder den indianske kultur, som han har opsøgt og boet sammen med i længere perioder. Siden har han bevæget sig mod det spontane, kraftfulde og dramatisk fortættede og mytiske. Med den brede, fyldte pensel og det glødende farvestof bevæger hans kunst sig på kanten af eksplosionen.',
                    price: '3.500 kr.'
                },
                {
                    id: 17,
                    imagePath: require(`../../assets/static/details/detail_17.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_17_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_17_2.jpg`),
                    artist: 'Gunleif Grube f. Thorshavn, Færøerne 1947. Han er maler, grafiker, forfatter og komponerer musik.',
                    information: '”Passion”, originalt farve litografi, trykt 1992, nr. 41/60. Lysmål 49/63 cm.  Rammemål 60/80 cm. Signeret Gunleif.',
                    captured: 'Indrammet og trykt på litografisk papir og med en alu sølvramme. Trykt af Galleri Egelund, København, i dag Galleri Christoffer Egelund (www.artdelivery.dk/galleri) ',
                    story: 'Grube maler ekspressionistisk. Han skaber med linjer, former og farver i et udbrud, både sanseligt drama og spænding, liv, død og afgørelse. Den passionerede røde farve, hvor passion betyder både lidenskab og lidelse er som den sorte farves ekspressive udtryksmåde, der fremkalder stærke følelser. Det menneskelige ansigt er hans motiv.',
                    price: '2.200 kr.'
                },
                {
                    id: 18,
                    imagePath: require(`../../assets/static/details/detail_18.jpg`),
                    artist: 'Tonny Hørning er en dansk maler og skulptør, autodidakt, oprindeligt uddannet som skiltemaler og født 1941 i Silkeborg.',
                    information: '”Særegen skønhed” originalt silketryk (serigrafi), skabt i 1975, nr. 77/500 (signatur med nål for neden til venstre i værkets sølvkarton). Lysmål 49/70 cm. Rammemål 60/83 cm. Signeret Hørning.',
                    captured: 'Indrammet og trykt på sort kardus og sølvfarvet karton og med en sølvfarvet alu ramme. Trygt på kunstnerens værksted.',
                    story: 'Hørning er billed- og installationskunstner med interesse for rum og særligt rum skabt til refleksion. Således erobres den fysiske lokalitet og omskabes til et eftertænksomhedens rum med mulighed for fordybelse i begreber som tid, orden, kaos og natur. Abstrakte kompositioner rummer både poesi, natur og en helt særegen skønhed.',
                    price: '3.900 kr.'
                },
                {
                    id: 19,
                    imagePath: require(`../../assets/static/details/detail_19.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_19_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_19_2.jpg`),
                    imageDetail3: require(`../../assets/static/details/detail_19_3.jpg`),
                     artist: 'Carl Aage Riget, dansk maler og billedhugger, oprindeligt skiltemaler, som kunstner autodidakt, f. 1933 i Aarhus og d. 2001 i Nykøbing Sjælland.',
                    information: '”Festival nr 2” originalt farve silketryk (serigrafi), skabt i 1980. nr. 207/300. Lysmå51/54 cm og rammemål 64/73 cm. Signeret K Riget.',
                    captured: 'Indrammet og med lys passepartout og trykt på karton og med en sølvfarvet alu ramme.',
                    story: 'Riget arbejdede med det konstruktive maleri og kendes på sine rene, klare farver, ordnet i geometriske former. Han skaber en harmonisk, levende billedflade ved at sammenstille enkelte elementer som brikker i et forløb. Riget var inspireret af både maskinernes verden og af de moderne samfunds visuelle informationer. Han var medlem af kunstnergruppen Grønningen og Den Blå Citron.',
                    price: '2.200 kr.'
                },
                {
                    id: 20,
                    imagePath: require(`../../assets/static/details/detail_20.jpg`),
                    imageDetail1: require(`../../assets/static/details/detail_20_1.jpg`),
                    imageDetail2: require(`../../assets/static/details/detail_20_2.jpg`),
                    imageDetail3: require(`../../assets/static/details/detail_20_3.jpg`),
                    artist: 'Per Baagøe, dansk kunstmaler og grafiker, ekspressionist, uddannet på Kunstakademiet, f. juleaften 1946 i København.',
                    information: '”Landevej i Odsherred” (bemærk katten i vejsiden) originalt litografi skabt i 1990, nr. XLVIII/L. Signeret Per Baagøe. Lysmål 46/63 cm. Rammemål 64/80 cm. ',
                    captured: 'Indrammet med lyst passepartout og trykt på L´Arhes papir og med en sølv alu. Ramme.',
                    story: 'Med brede, kraftige penselstrøg maler Per Baagøe himlen og havet, kystlinjen og de afvekslende strækninger med skovtykninger, stier, klitter og kornmarker, som han omsætter i få, koncentrerede farvetoner, der giver billederne intensitet og dramatik. Hans grafik omfatter bl.a. hans yndlingsmotiver med kvinden og katten. Odsherred er hans foretrukne malerlandskab. Var medlem af kunstnergruppen Violet sol og er med i kunstnersammenslutningen CORNER.',
                    price: '2.600 kr.'
                },
                {
                    id: 21,
                    imagePath: require(`../../assets/static/news/værk_21.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_21_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_21_2.jpg`),
                    artist: 'Mogens Andersen, dansk kunstmaler og grafiker, uddannet på maleren Peter Bøyesens malerskole. Født 1916 i København, død 2003 i Hellerup.',
                    information: '”Beta”, originalt litografi skabt i slutningen af 1980-erne, som del af en serie med Alfa, Beta, Gamma og Delta på U. M. Grafik, København (i dag Edition Copenhagen) med lysmål 56 x 76 cm og rammemål 64 x 83 cm. Signeret M. A.',
                    captured: 'Litografi indrammet med ”svæv” i en sort træramme og trykt på L`Arches papir.',
                    story: 'Mogens Andersen var inspireret af den tidlige franske modernisme. Boede fra 1945 til 1965 i Paris var meget optaget af fransk lyrisk-abstrakt kunst, som danner baggrund for hans karakteristiske mørke, dynamiske arabesker på lys bund. Mogens Andersen var bl.a. medlem af en af de mest ansete danske kunstsammenslutninger ”Grønningen”.',
                    price: '5.500 kr.'
                },    
                {
                    id: 22,
                    imagePath: require(`../../assets/static/news/værk_22.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_22_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_22_2.jpg`),
                    artist: 'Eugene de Sala, dansk autodidakt kunstmaler med det borgerlige navn, Osvald Lykkeberg Salomonsen, født i Randers 1899 og død i København 1987.',
                    information: '”Stil life”, originalt litografi, skabt hos U. M. Grafik, København (i dag edition Copenhagen) i 1984, signeret de sala, nr. 153/260, lysmål 40 x 52 cm og rammemål 55 x 66 cm.',
                    captured: 'Litografi med passepartout og trykt på L ´Aches papir og indrammet med dybblå alu. ramme.',
                    story: 'De Sala var livet igennem en usædvanlig billedkunstner og person. Han valgte bevidst at provokere med sit grønne hår og hvidpudrede ansigt i 1920-erne. Han omtales som kunstrebellen, der introducerede surrealismen i Danmark, stærkt inspireret af indtryk fra Paris af kunstretningerne da-daisme og kubisme. Der er delte meninger om hans kunst, malerier går til 200000 kr på Arne Bruun Rasmussens kunstauktionerne, men handles også til 1000 kr. En ener i dansk kunst.',
                    price: '3.300 kr'
                },
                {
                    id: 23,
                    imagePath: require(`../../assets/static/news/værk_23.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_23_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_23_2.jpg`),
                    artist: 'Osmund Hansen, maler og grafiker. Uddannet fra Folmer Bonnens malerskoler 1930 og selvlært, født 1908 i Ordrup og død 1914 på Frederiksberg.',
                    information: '”Udsigten”, originalt litografi, skabt hos U. M. Grafik (i dag Edition Copenhagen) i 1980-erne, signeret Osmund Hansen, nr. 22/200, lysmål 25 x 33 cm, og rammemål 31 x 41 cm.',
                    captured: 'Litografi indrammet med ”svæv”, trykt på L`Arshes papir og med sølvgrå alu. ramme.',
                    story: 'De bløde firkanters besynger og maler. Med udgangspunkt i naturalistisk landskabsmaleri bevægede Osmund Hansen sig mod kompositioner som beherskes af firkanter og balancerer mellem geometrisk klarhed i formen og stoflig sanselighed i farven. Han var ansat hos NESA og efter fyraften, som han sagde, ”kontorchefen, der maler”.',
                    price: '1.000 kr.'
                },
                {
                    id: 24,
                    imagePath: require(`../../assets/static/news/værk_24_0.jpg`),
                    imageDetail1: require(`../../assets/static/news/værk_24_1.jpg`),
                    imageDetail2: require(`../../assets/static/news/værk_24_2.jpg`),
                    imageDetail3: require(`../../assets/static/news/værk_24_3.jpg`),
                    artist: 'Bent Karl Jakobsen var dansk billedkunstner, uddannet som værktøjsmager og som kunstner autodidakt. Født 1934 i København og død 2004 i København.',
                    information: '”Verdenslandskab” er et silketryk, signeret Bent Karl Jakobsen, nr. 13/100, lysmål 50 x 87 cm og rammemål 70 x 106 cm.',
                    captured: 'Verdenslandskab er indrammet med passepartout og trykt på silketrykspapir og med en massiv hvidmalet træramme.',
                    story: 'Bent Karl Jakobsen blev omtalt som ”Den glade maler”. Hans interesse for pop-art og for at udforske de kunstneriske afsmitninger fra forbrugersamfundet fik Bent Karl Jakobsen til at rejse til New York i 70-erne. USA´s sociale og mentale spændinger satte sig varige spor i hans billedverden, som han tematiserede i sit maleri, ligesom jazz- musikkens verden optog ham.',
                    price: '4.800 kr.'
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