
<template>
<!-- Footer component -->
  <footer class="bg-portfolio-primary-darkblue py-8">

    <div class="container flex flex-col md:flex-row items-center">
      <div class="flex flex-col md:flex-row flex-1 flex-wrap items-center justify-center
                 md:justify-start gap-5 md:gap-12">
        <!-- Logo -->
          <icon name="logo"
                class="w-16 h-8 fill-portfolio-secondary-lightgrey">
          </icon>

        <div class="flex flex-col md:flex-row items-center text-white uppercase gap-5 md:gap-10 text-sm">
          <router-link :to="{ name: 'Home' }">HOME</router-link>
          <router-link :to="{ name: 'Portfolio' }">portfolio</router-link>
          <router-link :to="{ name: 'Contact' }" >contact me</router-link>
        </div>
      </div>

      <div class="flex gap-8 mt-5 md:mt-0">
        <icon name="github" class="w-6 h-6 fill-portfolio-secondary-lightgrey "></icon>
        <icon name="twitter" class="w-6 h-6 fill-portfolio-secondary-lightgrey" />
        <icon name="linkedin" class="w-6 h-6 fill-portfolio-secondary-lightgrey  " />
      </div>  
    </div>

  </footer> 
</template>
  
  
  
  