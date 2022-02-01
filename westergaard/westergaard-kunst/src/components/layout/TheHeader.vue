<template>
    <div>
        <ul class="ul__element">
            <h1 class="westergaard--title">Westergaard</h1>
            <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
                    <router-link to="/">Home</router-link>
                    <router-link to="/Presentation">Presentational</router-link>
                    <router-link to="/News">News</router-link>
                    <router-link to="/Contact">Contact</router-link>
            </Menu>
        </ul>
        <ul class="ul__desk">
                <router-link to="/">Home</router-link>
                <router-link to="/Presentation">Presentational</router-link>
                <router-link to="/News">News</router-link>
                <router-link to="/Contact">Contact</router-link>
        </ul>
    </div>
</template>

<script>
    import Menu from '../Menu';
    export default {
      name: 'slide',
      components: {
        Menu: Menu
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

    /* header{
        background-color: #212121;
        color: #fff;
        padding: 1em;

    } */

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
    }
    ul a{
        color: #fff;
        text-decoration: none;
    }
    .ul__desk a{
        color: #fff;
    }
    .ul__desk{
        background-color: #212121;
        padding: 1em;
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