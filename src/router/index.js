import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Portfolio from '../views/Portfolio.vue'
import ContactMe from '../views/ContactMe.vue'
import ViewProject from '../views/ViewProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { preFooter: true }
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: { preFooter: true }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactMe,
      meta: { preFooter: false } 
    },
    {
      path: '/portfolio/:id',
      name: 'ViewProject',
      component: ViewProject,
      props: true,
      meta: { preFooter: true }
    }
  ],
  
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
        return { left: 0, top: 0 };
    } else {
        return savedPosition;
    }
  }, 

    linkActiveClass: 'text-portfolio-primary-cyan',
    linkExactActiveClass: 'text-portfolio-primary-cyan' 
})

export default router
