<template>
    <div class="max-w-[1110px] mx-auto">
        <div v-if="projects.length">
            <div v-for="project in projects" :key="project.id">
                <div v-if="(project.id % 2)">
                    <OddProject :project="project" />
                </div>
                <div v-else>
                    <EvenProject :project="project" />
                </div>                
            </div>
            <div class="h-32"></div>
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
            .then((res) => {this.projects = res.data.projects
                            console.log(res.data.projects)
                            })

      /*  fetch( 'http://localhost:3000/projects' )
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message)) */

    }

}
</script>

