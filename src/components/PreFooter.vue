<template>
<!-- PreFooter  -->
  <section class="pt-5 mb-20 md:pt-0 md:mb-28 mx-auto">
    <!-- <div class="container bg-green-200 px-0     "> -->
      <div class="container w-full mx-auto
                 flex flex-col gap-10 md:gap-0
                 md:flex-row items-center justify-between">

        <h1 class="font-IbarraRealNova font-bold text-xl text-center text-portfolio-primary-darkblue
                  lg:hdr md:text-left md:w-1/2 xl:w-1/3 normal-case">
          Interested in doing a project together?
        </h1>

        <hr class="w-0 md:w-1/4 h-1 border-portfolio-secondary-grey">

        <router-link :to="{ path: '/contact'}">
          <button class="btn mt-0 w-[calc(172px)] h-12 md:h-[calc(54px)] md:ml-6 ld:ml-0">
            Contact Me
          </button>
        </router-link>

      </div>
    <!-- </div>   -->
  </section>
  
</template>