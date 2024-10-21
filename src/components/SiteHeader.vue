<template>
    <!-- Header with navigation bar -->
    <header class="bg-white text-white font-bold">    
     <nav class="flex justify-between items-center
                pl-4 pr-0 md:px-4 mx-auto max-w-screen-xl  py-8">
        <!-- Logo  -->
        <icon name="logo" class="w-16 h-8 fill-portfolio-primary-darkblue" />

        <!-- Menu -->
        <div class="hidden md:flex gap-8 font-PublicSans text-sm text-portfolio-primary-darkblue
                    font-light uppercase tracking-wider" v-show="!mobile">
            <router-link :to="{ name: 'Home' }">HOME</router-link>
            <!-- <router-link :to="{ name: 'Portfolio' }">portfolio</router-link> -->

            <router-link 
                :to="{ name: 'Portfolio' }"                
                
                active-class="text-portfolio-primary-cyan"
                :class="{ 'text-portfolio-primary-cyan': isPortfolioActive }"
                >portfolio
            </router-link>

            <router-link :to="{ name: 'Contact' }" >contact me</router-link>
        </div>

        <!-- burger-button to show/hide mobile menu-->
        <div class="md:hidden flex items-center">
            <button @click="toggleMobileNav"
                    v-show="mobile"
                    class="py-0 px-4">
                <icon v-if="mobilNav != true" name="hamburger" class="w-6 h-6" />
                <icon v-if="mobilNav" name="close" class="w-5 h-6" />
            </button>
        </div>

        <!-- Mobil Menu -->
        <transition name="mobil-outer"
                    class="p-5 w-2/3 max-w-xs flex flex-col fixed h-48  
                    bg-slate-950 top-20 right-4 z-50">
            <ul class="py-8 text-white items-center gap-8  font-normal uppercase tracking-wider"
                v-show="mobilNav">
                <router-link :to="{ name: 'Home' }" >HOME</router-link>
                <router-link :to="{ name: 'Portfolio' }">portfolio</router-link>
                <router-link :to="{ name: 'Contact' }" >contact me</router-link> 
            </ul>
        </transition>
     </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            mobile: null,
            mobilNav: null,
            windownWidth: null
        }
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    computed: {
        isPortfolioActive() {
            return this.$route.name === 'Portfolio' || this.$route.name === 'ViewProject';
        }
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobilNav = false;
            return;
        },

        toggleMobileNav() {
            this.mobilNav = !this.mobilNav;
        },
    }
}

</script>

<style scoped>
    .mobil-outer-enter-active,
    .mobil-outer-leave-active {
        transition: all 1s ease;
    }

    .mobil-outer-enter-from,
    .mobil-outer-leave-to {
        transform: translateX(350px);
    }

    .mobil-outer-enter-to {
        transform: translateX(0);
    }
</style>