<template>
    <component :is="icon"/>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// Получаем все svg-файлы в папке /src/assets/svg
const svgIcons = import.meta.glob('/src/assets/svg/*.svg');

const props = defineProps({
    name: {
        type: String,
        required: true,
    }
});

// Определяем асинхронный компонент
const icon = defineAsyncComponent(async () => {
    const iconPath = `/src/assets/svg/${props.name}.svg`;

    // Проверяем, существует ли иконка в списке иконок
    if (svgIcons[iconPath]) {
        return (await svgIcons[iconPath]()).default;
    } else {
        throw new Error(`Icon ${props.name} not found`);
    }
});

console.log(icon)
</script>

