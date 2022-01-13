<template>
    <header>
        <nav>
            <ul class="ul--element">
                <a href=""><li>HOME</li></a>
                <a href=""><li>SHOP</li></a>
                <a href=""><li>NEWS</li></a>
                <a href=""><li>PRESS</li></a>
                <a href=""><li>CONTACT</li></a>
            </ul>
        </nav>
    </header>
</template>

<style scoped>

    header{
        background-color:#222;
        color:#fff;
        padding:1em;

    }

    .ul--element{
        display:flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin:0 auto;
        min-width: 15em;
        font-size: 0.8em;
    }
    ul a{
        color: #fff;
        text-decoration: none;
    }

    ul a li {
        padding: 1em;
    }
</style>