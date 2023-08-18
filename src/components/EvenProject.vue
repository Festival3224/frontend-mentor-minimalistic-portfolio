<template>
    <div class="grid grid-cols-2 py-10">
        <div class="grid grid-cols-7">
            <div class="col-span-1 "></div>
            <div class="col-span-5 border-y-2 mx-[23px] py-20">
                <h1 class="hdr py-8">{{ project.title }}</h1>
                <p class="prg">{{  project.details }}</p>

                <router-link
                    
                     :to="{ name: 'ViewProject', params: { id: project.id }}"
                     custom
                     v-slot="{ navigate }"
                     >
                     <button class="btn w-44 h-[48px]"
                            @click="navigate"
                            role="link"
                        >view project
                    </button>
                </router-link>
                
            </div>
            <div class="col-span-1 "></div>
        </div>

        <div class="max-w-full h-max">
            <img :src="project.imageUrl" alt="#profile">
        </div>        
    </div>    
  
</template>

<script>
import ViewProject from '../views/ViewProject.vue';


export default {
    components: {  ViewProject },
    props: ['project'],
    /* data() {
        return {
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    } */
}
</script>

<style>

</style>