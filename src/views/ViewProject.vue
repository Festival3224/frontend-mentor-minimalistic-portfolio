<template>
    
    <div class="max-w-[1110px] h-max mx-auto">

        <div class="items-center pt-20 pb-28">
            <img :src="images[0]" alt="#hero">
        </div>   

        <div class="grid grid-cols-3">
            <div class="col-span-1 border-t-2">
                <h1 class="hdr py-8">{{ dproject.title }}</h1>
                <p class="prg pb-4">{{ dproject.details }}</p>
                <p class="py-4">Interaction Design / Front End Development</p>
                <p class="py-4">HTML / CSS / JS</p>
                <button class="btn w-[178px] h-12 mb-12">visit website</button>
                <div class="h-0 border w-full"></div>
            </div>

            <div class="col-span-2 pl-28">
                <h2 class="font-IbarraRealNova text-lg">Project Background</h2>
                <p class="py-10">{{ dproject.description }}</p>
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

                    <div class="flex-col pl-8 py-10">
                        <h2> {{ prevTitle }}</h2>
                        <p class="prg">Previous Project</p>
                    </div>                    
                </div>

                <div class="col-span-1 flex justify-end items-center">
                    <div class="flex-col pr-8">
                        <h2> {{ nextTitle }}</h2>
                        <p class="prg">Next Project</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                        <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/>
                    </svg>
                    
                </div>
        </div>

    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    props: ['id'],
    data() {
        return {
            prevTitle: 'previous',
            nextTitle: 'next',
            
            images: [],

            url: 'https://festival3224.github.io/portfolio_data_api/db.json' ,
            dproject: {}
        }
    },
    mounted() {
        axios.get(this.url)
            .then(res => {this.dproject = res.data.projects[this.id-1]
                          this.images = this.dproject.images  
                          console.log(res.data.projects[this.id])
                        })
           
    }
}
</script>