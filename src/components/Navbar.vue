<script setup lang="ts">
import { Mail } from 'lucide-vue-next';
import GithubIcon from './icons/GithubIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';
import XIcon from './icons/XIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
import { Button } from './ui/button';
import { ref } from 'vue';

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};
const primaryColor = '#00988b';
const whiteColor = '#ffffff';
const githubHover = ref(false);
const linkedinHover = ref(false);
const xHover = ref(false);
const discordHover = ref(false);

</script>

<template>
    <div
        class="sticky top-0 z-50 mx-auto flex max-w-4xl items-start justify-between pt-4 xl:items-center h-20 bg-background">
        <div class="flex flex-row items-center gap-4">
            <a href="https://github.com/SaltyGaben" class="hover:cursor-pointer hover:scale-115 transition-all"
                @mouseenter="githubHover = true" @mouseleave="githubHover = false">
                <GithubIcon :color="githubHover ? primaryColor : whiteColor" />
            </a>
            <a href="https://www.linkedin.com/in/hampustuvesson/"
                class="hover:cursor-pointer hover:scale-115 transition-all" @mouseenter="linkedinHover = true"
                @mouseleave="linkedinHover = false">
                <LinkedInIcon :color="linkedinHover ? primaryColor : whiteColor" />
            </a>
            <a href="https://x.com/SaltyGaben" class="hover:cursor-pointer hover:scale-115 transition-all"
                @mouseenter="xHover = true" @mouseleave="xHover = false">
                <XIcon :color="xHover ? primaryColor : whiteColor" />
            </a>
            <a href="https://discord.com/users/302204054753378319"
                class="hover:cursor-pointer hover:scale-115 transition-all" @mouseenter="discordHover = true"
                @mouseleave="discordHover = false">
                <DiscordIcon :size="32" :color="discordHover ? primaryColor : whiteColor" />
            </a>
        </div>
        <div class="flex flex-row items-center gap-2">
            <Button class="flex flex-row items-center gap-2  hover:cursor-pointer hover:bg-primary" variant="ghost"
                @click="scrollToContact">
                <Mail />
                <h1>Contact</h1>
            </Button>
        </div>
    </div>

</template>