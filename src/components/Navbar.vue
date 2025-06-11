<script setup lang="ts">
import { House, Github, Mail } from 'lucide-vue-next';
</script>

<template>
    <div class="flex flex-row items-center justify-between h-20 w-4xl fixed top-0 bg-background">
        <div class="flex flex-row items-center gap-2">
            <House />
            <Github />
        </div>
        <div class="flex flex-row items-center gap-2">
            <Mail />
            <h1>Contact</h1>
        </div>
    </div>
</template>