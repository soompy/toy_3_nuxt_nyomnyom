<template>
    <div>
        <ColorPicker @color-change="handleColorChange" />
    </div>
</template>

<script>
import ColorPicker from "../../ColorPicker.vue";

export default {
    name: "CustomCard",
    components: {ColorPicker},
    methods: {
        handleColorChange(selectedColor) {
            console.log('Selected Color:', selectedColor);
        },
    },
}

</script>

<style scoped>
</style>