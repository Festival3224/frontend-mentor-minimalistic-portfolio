<template>
    <!-- HomeView page -->

    <!-- Hero -->
    <section class="md:relative container px-0
                    w-fit h-full flex flex-col">
        <div class="w-fit h-full mx-auto">
            <img src="/../images/homepage/mobile/image-homepage-hero.jpg"
                 alt="#hero_mobile"
                 class="md:hidden">
            <img src="/../images/homepage/tablet/image-homepage-hero.jpg"
                 alt="#hero_tablet"
                 class="hidden md:block xl:hidden">
            <img src="/../images/homepage/desktop/image-homepage-hero.jpg"
                 alt="#hero_desktop"
                 class="hidden xl:block">         
        </div>
                    
        <div class="bg-white mx-auto 
                    md:absolute md:bottom-0 md:left-0
                    w-11/12 md:w-3/4 xl:w-2/5 py-8 md:pb-24 md:pt-14
                    xl:pt-9">
            <h1 class="font-IbarraRealNova font-bold 
                        leading-[42px] xl:leading-[50px] tracking-tighter xl:tracking-tightest
                        text-xl  xl:text-2xl md:w-4/5 xl:w-full align-text-top">
                Hey, I'm Alex Spencer  and  I  love building beautiful websites
            </h1>
        </div>

        <div class="my-4 md:my-0 w-11/12 md:w-2/3 mx-auto flex
                    md:absolute md:bottom-0 md:left-0">

            <button
                class="w-[198px] h-12 flex border group cursor-pointer border-portfolio-primary-darkblue hover:border-button-hover-darkcyan
                        bg-portfolio-primary-blue hover:bg-portfolio-primary-cyan"
                @click="goto('aboutMe')">

                <!-- Icon Part -->
                <span
                    class="w-12 h-full flex items-center justify-center
                        bg-portfolio-primary-darkgray group-hover:bg-button-hover-darkcyan">
                    <icon
                    name="down-arrows"
                    class="stroke-portfolio-primary-cyan group-hover:stroke-white"
                    ></icon>
                </span>

                <!-- Text Part -->
                <span
                    class="w-[150px] h-full flex items-center justify-center text-white
                        uppercase font-PublicSans text-base">
                    About Me
                </span>
            </button>

        </div>        
    </section>

    <!-- About Me -->
    <section ref="aboutMe"
             class="container flex flex-wrap md:flex-nowrap md:items-stretch py-24 lg:pr-24">
        <img src="/../images/homepage/desktop/image-homepage-profile.jpg"
             class="block md:hidden xl:block">
        <img src="/../images/homepage/tablet/image-homepage-profile.jpg"
             alt="#AboutMe"
             class="hidden md:block xl:hidden">   

        <div class="border-y-2 mt-8 md:mt-0 md:ml-[84px] lg:ml-[92px]">
            <h1 class="hdr text-xl py-8">About Me</h1>
            <p class="prg">I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
            <router-link :to="{ path: '/portfolio' }">
                <button class="btnS mb-12 mt-10 w-[202px] h-[48px]">
                    go to portfolio
                </button>
            </router-link>
        </div>
    </section>
    
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        methods: {
            goto(refName) {
                let element = this.$refs[refName];
                let myTop = element.offsetTop;
                // window.scrollTo(0, myTop);
                window.scrollTo({
                    top: myTop,
                    left: 0,
                    behavior: "smooth",
                });
            }
        }
    }    
</script>