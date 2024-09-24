<template>
    <!-- Contact -->
    <section class="relative">

        <!-- Get in touch -->
        <div class="container w-10/12 mx-auto max-w-screen-xl px-0 
                    flex flex-col lg:flex-row border-y-2 py-12
                    items-start gap-4 mt-10 lg:mt-12">
            <!-- Content -->
            <div class="flex flex-1 lg:flex-none lg:w-2/5 flex-col items-start">
                <h1 class="hdr text-xl normal-case">Get in Touch</h1>
            </div>

            <div class="flex flex-1 lg:flex-initial lg:w-3/5
                        flex-col gap-12">
                <p class="prg text-sm">I'd love to hear about what you're working on and how I could help. I'm currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I'm also happy to hear about opportunites that don't fit that description. I'm a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>

                <div class="flex justify-start flex-wrap gap-5">
                    <icon name="github" class="fill-portfolio-primary-blue"></icon>
                    <icon name="twitter" class="fill-portfolio-primary-blue"></icon>
                    <icon name="linkedin" class="fill-portfolio-primary-blue"></icon>                    
                </div>    
            </div>
        </div>

        <!-- Contact me -->
        <div class="container w-10/12 mx-auto max-w-screen-xl px-0
                    flex flex-col lg:flex-row py-0
                    items-start gap-4 mt-10 lg:mt-12">
            <div class="flex flex-1 lg:flex-none lg:w-2/5 flex-col items-start">
                <h1 class="hdr text-xl normal-case">Contact Me</h1>
            </div>

            <div class="w-full flex flex-1 lg:flex-initial 
                        lg:w-3/5 flex-col gap-12">
                <form class="items-start pb-20 md:pb-28">
                        <label class="block pb-2 font-bold  text-base text-portfolio-primary-blue ">Name</label>
                        <input type="text" v-model="state.name" required
                         class="w-full px-4 py-3 border-2 bg-portfolio-secondary-grey" placeholder="Jane Appleseed">
                        <span v-if="v$.name.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.name.$errors[0].$message }}
                         </span>

                        <label class="block pt-6 pb-2 font-bold text-base text-portfolio-primary-blue ">Email Address</label>
                        <input type="email" v-model="state.email" required
                         class="w-full px-4  py-3 border-2 bg-portfolio-secondary-grey" placeholder="email@example.com">
                         <span v-if="v$.email.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.email.$errors[0].$message }}
                         </span>

                        <label class="block pt-6 pb-2 font-bold text-base text-portfolio-primary-blue ">Message</label>
                        <textarea v-model="state.message" required
                         class="w-full h-24 px-4 py-3 border-2 bg-portfolio-secondary-grey" placeholder="How can I help?" ></textarea>                         
                         <span v-if="v$.message.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.message.$errors[0].$message }}
                         </span>

                        <button class="btn w-[200px] h-12 block
                                bg-portfolio-primary-blue
                                text-portfolio-secondary-lightgrey"
                                @click="submitForm">
                            send message
                        </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
export default {
    setup() {
        const state = reactive ({
            name: '',
            email: '',
            message: ''
        })

        const rules = computed(() => {
            return {
                name: { required },
                email: { required, email },
                message: { required, minLength: minLength(25) }
            }
        })

        const v$ = useValidate(rules, state)

        return { state, v$}
    },
    name: 'Contact',

    methods: {
        submitForm() {
            this.v$.$validate()
            if (!this.v$.$error) {
                alert('success, form submitted!')
            }else {
                alert('error, form NOT submitted!')
            }            
        }
    }
}
</script>