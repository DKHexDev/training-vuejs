<script lang="ts" setup>

</script>

<template>
    <header class="header">
        <nav class="header-navigation">
            <a href="#refs">References</a>
            <a href="#domRefs">DOM References</a>
            <a href="#reactives">Reactives</a>
            <a href="#emits">Emits</a>
            <a href="#slots">Slots</a>
            <a href="#props">Props</a>
            <a href="#vModel">V-Model</a>
            <a href="#computed">Computed</a>
            <a href="#component">Component</a>
            <a href="#routes">Routes</a>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: #1ba39c;
        display: flex;
        justify-content: center;
        align-items: center;

        nav {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: row;
            gap: 15px;

            a {
                color: #FFF;
                font-family: "Roboto", sans-serif;
                text-decoration: none;
                font-size: 24px;
                border-bottom: 1px solid #FFF;
                padding: 5px 10px;
                transition: all 400ms ease-in-out;

                &:hover {
                    background-color: #FFF;
                    color: #1ba39c;
                }
            }
        }
    }
</style>