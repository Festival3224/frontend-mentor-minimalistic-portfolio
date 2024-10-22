<template>
    <!-- Odd Project  нечетный -->
    <section class="relative">
        <div class="container px-8 md:px-10 lg:px-4 max-w-screen-xl">
            <div class="flex flex-col gap-8 md:flex-row md:gap-4 md:py-10">

                <div class="flex md:flex-1 justify-center md:items-center">
                    <img :src="project.imageUrl" alt="#profile">
                </div>

                <div class="md:flex-1">
                    <div class="flex flex-col md:h-full items-start
                                justify-center border-y-2 mb-16
                                md:w-5/6 lg:w-4/6 md:mx-auto">
                        <h1 class="hdr text-xl py-6  md:py-4">{{ project.title }}</h1>
                        <p class="prg md:py-2 pr-2 md:px-0 tracking-normal text-sm lg:text-base">{{  project.details }}</p>

                        <router-link :to="{ name: 'ViewProject', params: { id: project.id }}" class="py-6 md:py-4">
                            <button class="btnS mt-0 w-44 h-[48px]" @click="showDetails()">
                                view project
                            </button>
                        </router-link>
                    </div>    
                </div>

            </div>
        </div>
    </section>
  
</template>

<script>
import ViewProject from '../views/ViewProject.vue';

export default {
    components: { ViewProject },
    props: ['project'],
    methods: {
        showDetails() {
            console.log(this.$route.path)
        }
    }
}
</script>