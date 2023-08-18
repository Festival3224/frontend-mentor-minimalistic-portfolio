<template>
    <div class="relative bg-[url('../images/homepage/desktop/image-homepage-hero.jpg')] mx-auto max-w-[1110px] h-[600px]">
        <div class="absolute bottom-0 left-0 bg-white w-[445px] pt-11 pb-[70px] px-1">
            <h1 class="font-IbarraRealNova font-bold text-2xl">Hey, I'm Alex Spencer  and  I  love building beautiful websites</h1>
        </div>
        <div class="absolute bottom-0 left-0 flex">
            <button class="w-12 h-12 border border-portfolio-primary-darkblue bg-portfolio-primary-darkblue
                    text-center items-center pl-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            </button>

            <button class="font-PublicSans text-base uppercase border border-portfolio-primary-blue  w-[150px]
                        bg-portfolio-primary-blue 
                        text-center items-center text-white"
                    @click="goto('aboutMe')">
                about me
            </button>
        </div>
        
    </div>

    <div class="mx-auto max-w-[1110px] grid grid-cols-2 py-[150px]"
         ref="aboutMe">
        <div class="max-w-full h-max">
            <img src="/../images/homepage/desktop/image-homepage-profile.jpg" alt="#profile">
        </div>

        <div class="grid grid-cols-7">
            <div class="col-span-1 "></div>
            <div class="col-span-5 border-y-2 mx-[23px]">
                <h1 class="hdr py-8">About Me</h1>
                <p class="prg">I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                
                <router-link :to="{ path: '/portfolio' }">
                    <button class="btn w-[202px] h-[48px]">
                        go to portfolio
                    </button>
                </router-link>
            </div>
            <div class="col-span-1 "></div>
            
        </div>
        
    </div>
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