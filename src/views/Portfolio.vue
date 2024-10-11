<template>
    <!-- Portfolio main page -->
    <div class="max-w-screen-xl mx-auto">
        
        <div v-if="projects.length" class="pb-10 md:pb-14">
            <div v-for="project in projects" :key="project.id">
                <router-link :to="{ name: 'ViewProject', params: { id: project.id } }">
                    <div v-if="(project.id % 2)">
                        <OddProject :project="project" />
                    </div>
                    <div v-else>
                        <EvenProject :project="project" />
                    </div>
                </router-link>                  
            </div>
            
        </div>
    </div>     
</template>

<script>
import OddProject from '../components/OddProject.vue'
import EvenProject from '../components/EvenProject.vue'

import axios from 'axios'

export default {
    components: { OddProject, EvenProject },
    data() {
        return {
            projects: []
        }
    },
    mounted() {
        axios.get('https://festival3224.github.io/portfolio_data_api/db.json')
            .then((res) => {
                this.projects = res.data.projects
            })
            .catch(err => console.log(err.message));
    }

}
</script>

