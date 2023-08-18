<!-- PreFooter component -->
<template>

    <div class="h-52  max-w-screen-lg  mx-auto">
    <div class="max-w-[calc(1110px)] mx-auto flex py-4 justify-between items-center">
      <h1 class="hdr w-[350px] normal-case">Interested in doing a project together?</h1>

      <hr class="w-5/12 h-1 border-portfolio-secondary-grey">

      <router-link :to="{ path: '/contact'}">
        <button class="btn w-[calc(172px)] h-[calc(54px)]">Contact Me</button>
      </router-link>
    </div>              
  </div>
  
</template>