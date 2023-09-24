<script lang="ts" setup>
    const props = defineProps<{
        title?: string,
        isVisible: boolean
    }>();

    defineEmits(['setIsVisible']);
</script>

<template>
    <div v-if="isVisible" class="modal-global-container">
        <div class="modal-container">

        </div>
        <div class="modal-global-overlay" @click="$emit('setIsVisible', !props.isVisible)"  />
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

        .modal-global-overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: transparent;
            z-index: 501;
        }

        .modal-container {
            width: 40%;
            height: auto;
            min-height: 400px;
            background-color: #FFF;
            border-radius: 10px;
            position: relative;
            z-index: 502;
        }
    }
</style>