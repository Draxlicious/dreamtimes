<template>
    Presentational
    <main class="main-container">
        <section class="grid-section">
            <img :src="require(`../../assets/static/${image}`)" alt="">
        </section>
    </main>
</template>

<style scoped>
.grid-section{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}

img{
    height:500px;
    width: 500px;
}
</style>

<script>
export default {
    data() {
        return {
            
            image: 'IMG_3920.jpg'
           
        }
    }
}
</script>