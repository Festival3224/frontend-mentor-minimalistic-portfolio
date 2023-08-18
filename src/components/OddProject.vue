<template>
    <div class="grid grid-cols-2 pt-10 pb-10">
        <div class="max-w-full h-max">
            <img :src="project.imageUrl" alt="#profile">
        </div>

        <div class="grid grid-cols-7">
            <div class="col-span-1 "></div>
            <div class="col-span-5 border-y-2 mx-[23px]">
                <h1 class="hdr py-8">{{ project.title }}</h1>
                <p class="prg">{{  project.details }}</p>

                <router-link :to="{ name: 'ViewProject', params: { id: project.id }}">
                   <!--   custom
                     v-slot="{ navigate }"
                     > -->
                     <button class="btn w-44 h-[48px]" @click="showDetails()">
                            <!-- @click="navigate"
                            role="link" -->
                        view project</button>
                </router-link>
            </div>
            <div class="col-span-1 "></div>
        </div>
    </div>

    
    
  
</template>

<script>
import ViewProject from '../views/ViewProject.vue';

export default {
    components: {  ViewProject },
    props: ['project'],
    methods: {
        showDetails() {
            console.log(this.$route.path)
        }
    }
}
</script>

<style>

</style>