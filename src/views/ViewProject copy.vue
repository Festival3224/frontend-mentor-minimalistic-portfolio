<template>
    <!-- View Project -->
    <div class="max-w-[1110px] h-max mx-auto">

        <div class="items-center pt-20 pb-28">
            <img :src="images[0]" alt="#hero">
        </div>   

        <div class="grid grid-cols-3">
            <div class="col-span-1 border-t-2">
                <h1 class="hdr py-8">{{ currentProject.title }}</h1>
                <p class="prg pb-4">{{ currentProject.details }}</p>
                <p class="py-4 text-portfolio-primary-cyan text-base font-semibold  ">Interaction Design / Front End Development</p>
                <p class="prg py-4 text-portfolio-primary-cyan font-semibold">HTML / CSS / JS</p>
                <button class="btn w-[178px] h-12 mb-12">visit website</button>
                <div class="h-0 border w-full"></div>
            </div>

            <div class="col-span-2 pl-28">
                <h2 class="font-IbarraRealNova text-lg">Project Background</h2>
                <p class="prg py-10">{{ currentProject.description }}</p>
                <h2 class="font-IbarraRealNova text-lg">Static Previews</h2>
                <img :src="images[1]" class="py-4" alt="#hero">
                <img :src="images[2]" class="py-4" alt="#hero">
            </div>         
        </div>

        <div class="grid grid-cols-2 border-y-2 mt-16 mb-24">
                <div class="col-span-1 border-r-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                        <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/>
                    </svg>

                    <div class="flex-col pl-8 py-10" @click="prevProject">
                        <h2 class="text-lg"> {{ prevTitle }}</h2>
                        <p class="prg text-left">Previous Project</p>
                    </div>                    
                </div>

                <div class="col-span-1 flex justify-end items-center">
                    <div class="flex-col pr-8" @click="nextProject">
                        <h2 class="text-lg text-right"> {{ nextTitle }}</h2>
                        <p class="prg text-right">Next Project</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                        <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/>
                    </svg>
                    
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

            // url: 'https://festival3224.github.io/portfolio_data_api/db.json' ,
            currentProject: {}
        }
    },

    // mounted() {
    //     axios.get(this.url)
    //         .then(res => {this.dproject = res.data.projects[this.id-1]
    //                       this.images = this.dproject.images 
    //                       this.getSlideCount = res.data.projects.length
    //                       this.prevTitle = res.data.projects[this.id-2].title
    //                       this.nextTitle = res.data.projects[this.id].title
    //                       console.log("current: ", this.dproject)
    //                       console.log("length: ", this.getSlideCount)
    //                       console.log("router: ", this.$route.path)
    //                     })           
    // },

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