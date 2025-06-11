<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
</script>

<template>
  <div class="bg-background w-full h-screen relative">
    <div class="w-4xl flex flex-col items-start justify-start mx-auto relative">
      <Navbar />
      <div class="flex flex-col mt-20 gap-40">
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  </div>
</template>