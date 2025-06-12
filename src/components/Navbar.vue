<script setup lang="ts">
import { Mail } from 'lucide-vue-next';
import GithubIcon from './icons/GithubIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';
import XIcon from './icons/XIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
</script>

<template>
    <div
        class="sticky top-0 z-50 mx-auto flex max-w-4xl items-start justify-between pt-4 xl:items-center h-20 bg-background">
        <div class="flex flex-row items-center gap-4">
            <GithubIcon />
            <LinkedInIcon />
            <XIcon />
            <DiscordIcon :size="32" />
        </div>
        <div class="flex flex-row items-center gap-2">
            <Mail />
            <h1>Contact</h1>
        </div>
    </div>

</template>