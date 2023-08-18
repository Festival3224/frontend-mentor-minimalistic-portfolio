<template>
    <div class="flex justify-between px-1 mx-auto max-w-[calc(1110px)] bg-white  py-8 items-center text-white font-bold">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
                <path fill="#33323D" fill-rule="evenodd"
                 d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/>
            </svg>
        </div>
        <div class="flex gap-8 font-PublicSans text-sm text-portfolio-primary-darkblue
                    font-light uppercase tracking-wider">
            <router-link :to="{ name: 'Home' }">HOME</router-link>
            <router-link :to="{ name: 'Portfolio' }">portfolio</router-link>
            <router-link :to="{ name: 'Contact' }" >contact me</router-link>
        </div>
    </div>
</template>