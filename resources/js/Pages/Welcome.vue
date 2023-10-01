<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Frontend from "@/Layouts/Frontend.vue";
import Hero from "@/Components/Frontend/Hero.vue";
// import Promote from "resources/js/Components/Frontend/Promote.vue";
// import About from "resources/js/Components/Frontend/About.vue";
// import Skills from "resources/js/Components/Frontend/Skills.vue";
// import Portfolio from "resources/js/Components/Frontend/Portfolio.vue";
// import Services from "resources/js/Components/Frontend/Services.vue";
// import ContactMe from "../Components/Frontend/ContactMe.vue";

// defineProps({
//   skills: Object,
//   projects: Object,
// });
</script>

<template>
  <Head title="Welcome to portfolio" />
  <Frontend>
     <!-- Hero primary -->
    <Hero />
    <!-- Promote tail-100 -->
    <Promote />
    <!-- About secondary -->
    <About />
    <!-- Skills tail-100 -->
    <!-- <Skills :skills="skills" /> -->
    <!-- Portfolio primary -->
    <!-- <Portfolio :skills="skills" :projects="projects" /> -->
    <!-- Services secondary -->
    <Services />
    <!-- Contact primary -->
    <ContactMe />
  </Frontend>
</template>
    

        