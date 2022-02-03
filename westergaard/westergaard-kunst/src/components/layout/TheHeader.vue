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
    <div class="site--title">
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
    .ul__desk a{
        position: relative;
        color: #fff;
        padding: 2em 3em;
    }

    .ul__desk a::before{
        transition: all 500ms linear;
        content: '';
        position: absolute;
        bottom: 25%;
        left: 0;
        right: 0;
        width: 0;
        height:1px;
        background-color: white;
        
    }
    .ul__desk a:hover::before{
        content: '';
        width: 100%;
        
    }
    .ul__desk{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212121;
        margin: 0;
    }

    ul a  {
        padding: 1em;
    }

    @media only screen and (min-width: 649px) {
        .ul__element {
            display: none;
        }
    }
    @media only screen and (max-width: 650px) {
        .ul__desk {
            display: none;
        }
    }
</style>