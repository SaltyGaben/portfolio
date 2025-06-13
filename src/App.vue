<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <main class="bg-background container mx-auto flex-1 px-4 max-w-4xl mb-40">
    <Navbar />
    <div class="flex flex-col mt-20 gap-60">
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  </main>
</template>