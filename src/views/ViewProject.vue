<template>
    <!-- View Project -->
    <div class="container h-max mx-auto">

        <!-- Main image of project -->
        <div class="items-center pt-2 pb-10 lg:pb-28">
            <img :src="images[0]" alt="#hero">
        </div>           

        <section class="relative">
            <div class="flex flex-col lg:flex-row">
                <!-- Small Screens:  -->
                <div class="w-full flex flex-col md:hidden">
                    <h1 class="hdr text-xl mt-12">{{ currentProject.title }}</h1>
                    <p class="prg pb-4">{{ currentProject.details }}</p>
                    <!-- Stack -->
                    <p class="pt-2 text-portfolio-primary-cyan text-base font-semibold  ">Interaction Design / Front End Development</p>
                    <p class="prg py-4 text-portfolio-primary-cyan font-semibold">HTML / CSS / JS</p>
                    <button class="btnS w-[178px] h-12 mb-12">visit website</button>
                    <div class="h-0 border w-full"></div>
                    <!-- Project Background -->
                    <h2 class="font-IbarraRealNova text-lg">Project Background</h2>
                    <p class="prg py-10">{{ currentProject.description }}</p>                        
                    <!-- Static Previews -->
                    <h2 class="font-IbarraRealNova text-lg">Static Previews</h2>
                    <img :src="images[1]" class="py-4" alt="#hero">
                    <img :src="images[2]" class="py-4" alt="#hero">                   
                </div>

                <!-- Medium Screens: -->
                <div class="hidden md:flex md:flex-col md:w-full lg:hidden">
                    <div class="flex flex-row border-y-2 pt-8">
                        <div class="flex flex-col w-1/2">
                            <!-- Project Name -->
                            <h1 class="hdr text-xl pr-3 mt-1">{{ currentProject.title }}</h1>
                            <!-- Stack: --> 
                            <p class="pt-2 text-portfolio-primary-cyan text-base font-semibold  ">Interaction Design / Front End Development</p>
                            <p class="prg py-4 text-portfolio-primary-cyan font-semibold">HTML / CSS / JS</p>
                            <button class="btnS w-[178px] h-12 mb-8">visit website</button>                                
                        </div>
                        <!-- Project details -->                         
                        <p class="w-1/2 prg pl-3 pb-4">{{ currentProject.details }}</p>                        
                    </div>
                    <!-- Project Background -->
                    <h2 class="pt-10 font-IbarraRealNova text-lg">Project Background</h2>
                    <p class="prg py-10">{{ currentProject.description }}</p>                    
                    <!-- Static Previews -->
                    <h2 class="font-IbarraRealNova text-lg pb-6">Static Previews</h2>
                    <img :src="images[1]" class="py-4" alt="#hero">
                    <img :src="images[2]" class="py-4" alt="#hero">                    
                </div>

                <!-- Large Screens: -->
                <div class="hidden lg:flex lg:w-full">
                    <div class="flex flex-col w-1/3">
                        <!-- Project Name -->
                        <div class="border-t-2">
                            <h1 class="hdr text-xl mt-12">{{ currentProject.title }}</h1>
                        </div> 
                        <!-- Project details -->                        
                        <p class="prg pb-4">{{ currentProject.details }}</p>                        
                        <!-- Stack -->                        
                        <p class="pt-2 text-portfolio-primary-cyan text-base font-semibold  ">Interaction Design / Front End Development</p>
                        <p class="prg py-4 text-portfolio-primary-cyan font-semibold">HTML / CSS / JS</p>
                        <button class="btnS w-[178px] h-12 mb-12">visit website</button>
                        <div class="h-0 border w-full"></div>                        
                    </div>
                    <div class="flex flex-col w-2/3 pl-28">
                        <!-- Project Background -->                        
                        <h2 class="font-IbarraRealNova text-lg">Project Background</h2>
                        <p class="prg py-10">{{ currentProject.description }}</p>                        
                        <!-- Static Previews -->                        
                        <h2 class="font-IbarraRealNova text-lg">Static Previews</h2>
                        <img :src="images[1]" class="py-4" alt="#hero">
                        <img :src="images[2]" class="py-4" alt="#hero">                        
                    </div>
                </div>
            </div>
        </section>

        <div class="flex flex-row border-y-2 mt-16 mb-24 h-[148px] md:h-[132px]">
            
            <div class="w-1/2 border-r-2 flex flex-col md:flex-row items-start pl-4 gap-4 pt-4 md:items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                    <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/>
                </svg>

                <div class="flex-col md:pt-0 md:pl-8 cursor-pointer" @click="prevProject">
                    <h2 class="hdr text-lg"> {{ prevTitle }}</h2>
                    <p class="prg text-left">Previous Project</p>
                </div>                    
            </div>

            <div class="w-1/2 flex flex-col md:flex-row-reverse md:justify-start items-end md:items-center pt-4 gap-4 pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                    <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/>
                </svg>
                <div class="flex-col md:pr-8  md:pt-0 cursor-pointer" @click="nextProject">
                    <h2 class="hdr text-lg text-right"> {{ nextTitle }}</h2>
                    <p class="prg text-right">Next Project</p>
                </div>                 
            </div>
        </div>

    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data(props) {
        let idCurrentProject = props.id
        return {
            idCurrentProject,
            prevTitle: '',
            nextTitle: '',
            getProjectCount: 0,
            
            images: [],

            currentProject: {}
        }
    },

    methods: {
        async getProgect(index) {
            const response = await axios.get('https://festival3224.github.io/portfolio_data_api/db.json')
            this.currentProject = response.data.projects[index-1]
            this.images = this.currentProject.images
            this.getProjectCount = response.data.projects.length

            if (index-1 === 0){
                this.prevTitle = response.data.projects[this.getProjectCount-1].title
            } else {
            this.prevTitle = response.data.projects[index-2].title
            }

            if(index === this.getProjectCount){
                this.nextTitle = response.data.projects[0].title
            }else {
                this.nextTitle = response.data.projects[index].title
            }
        },

        // next Project
        nextProject() {
            this.idCurrentProject++;
            if (this.idCurrentProject > (this.getProjectCount)) {
                this.idCurrentProject = 1
            }
            this.getProgect(this.idCurrentProject)
        },

        // previous Project
        prevProject() {
            this.idCurrentProject--;
            if (this.idCurrentProject < 1) {
                this.idCurrentProject = this.getProjectCount
            }
            this.getProgect(this.idCurrentProject)
        }
    },

    created() {
        this.getProgect(this.idCurrentProject)
    }
}   
</script>