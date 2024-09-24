<template>
    <!-- Portfolio main page -->
    <div class="max-w-screen-xl mx-auto">
        
        <div v-if="projects.length" class="pb-10">
            <div v-for="project in projects" :key="project.id">
                <div v-if="(project.id % 2)">
                    <OddProject :project="project" />
                </div>
                <div v-else>
                    <EvenProject :project="project" />
                </div>                
            </div>
            <!-- <div class="h-32"></div> -->
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
                            // console.log(res.data.projects);
                            // console.log(this.projects.length)
            })
            .catch(err => console.log(err.message));

      /*  fetch( 'http://localhost:3000/projects' )
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message)) */

    }

}
</script>

