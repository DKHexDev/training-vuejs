<script lang="ts" setup>
    const props = defineProps<{
        title?: string,
        isVisible: boolean
    }>();
</script>

<template>
    <div class="modal-global-container">
        <div class="modal-container">

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal-global-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        z-index: 500;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        .modal-container {
            width: 40%;
            height: auto;
            min-height: 400px;
            background-color: #FFF;
            border-radius: 10px;
        }
    }
</style>