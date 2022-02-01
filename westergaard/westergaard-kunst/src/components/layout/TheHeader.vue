<template>
    <nav>
        <ul class="ul__element">
            <h2 class="westergaard--title">Westergaard</h2>
            <BurgerMenu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
                    <a href="/">Home</a>
                    <a href="/Presentation">Presentational</a>
                    <a href="/News">News</a>
                    <a href="/Contact">Contact</a>
            </BurgerMenu>
        </ul>
        <ul class="ul__desk">
                <router-link to="/">Home</router-link>
                <router-link to="/Presentation">Presentational</router-link>
                <router-link to="/News">News</router-link>
                <router-link to="/Contact">Contact</router-link>
        </ul>
    </nav>
    <div class="container">
        <h1>Westergaard</h1>
    </div>
</template>

<script>
    import BurgerMenu from '../ui/BurgerMenu.vue';
    export default {
      name: 'slide',
      components: {
        BurgerMenu
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>

<style scoped>

    nav{
    font-family: "museo-sans",sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.3em;
    text-align: center;
    }

    .westergaard--title{
        color: #fff;
    }

    .ul__element{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0 auto;
        min-width: 15em;
        font-size: 0.8em;
        background-color:#212121;
        min-height: 7em;
    }
    ul a{
        color: #fff;
        text-decoration: none;
    }
    .ul__desk a{
        color: #fff;
        padding: 2em;
        position: relative;
    }
    .ul__desk a:hover::before{
        content: '';
        position: absolute;
        bottom: 25%;
        left: 0;
        right: 0;
        border-bottom: 1px solid #fff;
    }
    .ul__desk{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212121;
        width: 100%;
        margin: 0;
    }

    ul a  {
        padding: 1em;
    }

    @media only screen and (min-width: 412px) {
        .ul__element {
            display: none;
        }
    }
    @media only screen and (max-width: 412px) {
        .ul__desk {
            display: none;
        }
    }
</style>