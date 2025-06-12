<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Button } from './ui/button'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import GithubIcon from './icons/GithubIcon.vue'
import { SquareArrowOutUpRight } from 'lucide-vue-next'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
    api.value = val
}

watchOnce(api, (api) => {
    if (!api)
        return

    totalCount.value = api.scrollSnapList().length
    current.value = api.selectedScrollSnap() + 1

    api.on('select', () => {
        current.value = api.selectedScrollSnap() + 1
    })
})

const projects = [
    {
        title: 'League Roller',
        description: 'A web application that allows users to randomly select a champion from League of Legends. \n They also have the ability to randomize items, summoner spells and runes.',
        technologies: ['Vue', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'Riot API'],
        image: './src/assets/images/league-roller.png'
    }
]
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-200 px-4 sm:px-0">
        <Carousel class="h-2/3 flex items-center justify-center w-full sm:w-10/12 mb-4 sm:mb-0" @init-api="setApi">
            <CarouselContent class="h-full max-w-2xl">
                <CarouselItem v-for="(project, index) in projects" :key="index">
                    <div class="p-1 flex items-center justify-center h-full">
                        <Card class="w-full shadow-none sm:shadow-xl/20 shadow-black flex flex-col pt-0 max-w-2xl ">
                            <img :src="project.image" alt="Project Image" class="w-full h-50 object-cover rounded-t-xl">
                            <CardContent class="flex flex-col justify-center gap-2">
                                <span class="text-4xl font-bold">{{ project.title }}</span>
                                <div class="flex flex-row justify-start gap-2 w-full flex-wrap items-center">
                                    <span v-for="technology in project.technologies" :key="technology"
                                        class="flex text-sm text-primary bg-primary/10 rounded-full px-3 py-1 ">
                                        {{ technology }}
                                    </span>
                                </div>
                                <span class="text-sm text-gray-500">{{ project.description }}</span>
                                <div class="flex flex-row justify-start items-center gap-4 mt-2">
                                    <a href="https://github.com/SaltyGaben/league-roller" target="_blank"
                                        class="text-sm text-primary hover:text-primary/80 group">
                                        <GithubIcon size="30" class="hover:scale-110 transition-all" />
                                    </a>
                                    <Button
                                        class="rounded-2xl flex flex-row items-center gap-2 hover:cursor-pointer hover:scale-105 transition-all">
                                        Visit
                                        <SquareArrowOutUpRight :size="16" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="border-none hover:cursor-pointer hidden sm:flex" />
            <CarouselNext class="border-none hover:cursor-pointer hidden sm:flex" />
        </Carousel>
        <div class="text-center text-sm text-muted flex flex-row items-center justify-center gap-2">
            <span v-for="i in totalCount" :key="i" :class="{ 'bg-white': i === current }"
                class="w-2 h-2 rounded-full bg-muted transition-all duration-300">
            </span>
        </div>
    </div>
</template>