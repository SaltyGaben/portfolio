<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { MapPin, Clock } from 'lucide-vue-next'

const experience = [
    {
        title: 'Consultant',
        description: 'I am a consultant at CGI, where I work on a project for a client. I am a full-stack developer, and I am responsible for the development of the front-end and back-end of the project.',
        company: 'CGI',
        date: '2024 - Present',
        location: 'Karlskrona, Sweden',
        technologies: ['Java', 'Spring Boot/Quarkus', 'Vue', 'Git', 'CI/CD', 'Agile'],
        image: './src/assets/images/CGI-logo.png'
    }
]
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-full gap-10">
        <h1 class="text-7xl font-extralight tracking-widest">Experience</h1>
        <Card v-for="experience in experience" :key="experience.title" class="w-11/12 shadow-xl/20 shadow-black gap-2">
            <CardHeader class="flex flex-col gap-2">
                <CardTitle class="text-5xl font-bold">{{ experience.company }}</CardTitle>
                <CardDescription class="text-xl text-foreground">{{ experience.title }}</CardDescription>
                <CardDescription class="text-lg text-muted flex flex-row items-center gap-2">
                    <Clock :size="18" />
                    {{ experience.date }}
                </CardDescription>
                <CardDescription class="text-lg text-muted flex flex-row items-center gap-2">
                    <MapPin :size="18" />
                    {{ experience.location }}
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col justify-center gap-2">
                <div class="flex flex-row justify-start gap-2 w-full flex-wrap items-center">
                    <span v-for="technology in experience.technologies" :key="technology"
                        class="flex text-sm text-primary bg-primary/10 rounded-full px-3 py-1 ">
                        {{ technology }}
                    </span>
                </div>
                <p class="text-lg text-muted">{{ experience.description }}</p>
            </CardContent>
        </Card>
    </div>
</template>