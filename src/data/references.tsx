export default `<script lang="ts" setup>
    import { ref } from "vue";

    const nombreDeClics = ref<number>(0);

    const incrementerNombreDeClics = ()  => {
        nombreDeClics.value++;
    };
</script>

<template>
    <div>
        <button @click="incrementerNombreDeClics">Clique ici</button>
        <p>Nombre de clics : {{ nombreDeClics }}</p>
    </div>
</template>`;