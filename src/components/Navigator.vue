<script setup lang="ts">
import { ref } from 'vue';
import { Separator } from '@/components/ui/separator'

const currentSection = ref('about')

</script>

<template>
    <div class="flex flex-col items-center justify-center w-30">
        <div class="flex flex-row items-center w-full gap-4 group">
            <span
                :class="{ 'active-style-div': currentSection === 'about', 'inactive-style-div': currentSection !== 'about' }"></span>
            <p
                :class="{ 'active-style-text': currentSection === 'about', 'inactive-style-text': currentSection !== 'about' }">
                About</p>
        </div>
        <div class="flex flex-row items-center justify-between w-full gap-4 group mt-2">
            <span
                :class="{ 'active-style-div': currentSection === 'projects', 'inactive-style-div': currentSection !== 'projects' }"></span>
            <p
                :class="{ 'active-style-text': currentSection === 'projects', 'inactive-style-text': currentSection !== 'projects' }">
                Projects</p>
        </div>
        <div class="flex flex-row items-center justify-between w-full gap-4 group mt-2">
            <span
                :class="{ 'active-style-div': currentSection === 'experience', 'inactive-style-div': currentSection !== 'experience' }"></span>
            <p
                :class="{ 'active-style-text': currentSection === 'experience', 'inactive-style-text': currentSection !== 'experience' }">
                Experience</p>
        </div>
    </div>
</template>

<style scoped>
.active-style-div {
    width: 5rem;
    height: 1px;
    background-color: white;
}

.inactive-style-div {
    width: 3.5rem;
    height: 1px;
    background-color: #8892b0;
}

.active-style-text {
    color: white;
    font-size: 1.2rem;
}

.inactive-style-text {
    color: #8892b0;
}
</style>