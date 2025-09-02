<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div class="min-h-screen w-full bg-background relative overflow-x-hidden">
    <div class="absolute inset-0 opacity-30" :style="{
      background: '#000000',
      backgroundImage: `
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }" />
    <main class="container mx-auto flex-1 px-4 max-w-4xl mb-40">
      <Navbar />
      <div class="flex flex-col mt-20 gap-60">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  </div>
</template>
