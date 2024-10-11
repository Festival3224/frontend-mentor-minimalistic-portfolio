<template>
    <section class="relative">
        <!-- Get in touch -->
        <div class="container w-10/12 mx-auto max-w-screen-xl px-0 
                    flex flex-col lg:flex-row border-y-2 py-12
                    items-start gap-4 mt-10 lg:mt-12">
            <div class="flex flex-1 lg:flex-none lg:w-2/5 flex-col items-start">
                <h1 class="hdr text-xl normal-case">Get in Touch</h1>
            </div>

            <div class="flex flex-1 lg:flex-initial lg:w-3/5 flex-col gap-12">
                <p class="prg text-sm">
                    I'd love to hear about what you're working on and how I could help. I'm currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I'm also happy to hear about opportunities that don't fit that description.
                </p>

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
                
                <!-- Form -->
                <div class="items-start pb-20 md:pb-28">

                    <!-- Name Field -->
                     <div class="h-[110px]">
                        <BaseInput
                            v-model="state.name"
                            label="Name"
                            type="text"
                            placeholder="Jane Appleseed"
                            :hasError="v$.name.$error"
                        />                    
                        <span v-if="v$.name.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.name.$errors[0].$message }}
                        </span>
                    </div>

                    <!-- Email Field -->
                     <div class="h-[110px]">
                        <BaseInput
                          v-model="state.email"
                          label="Email"
                          type="email"
                          placeholder="email@example.com"
                          :hasError="v$.email.$error"
                        />
                        <span v-if="v$.email.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.email.$errors[0].$message }}
                        </span>
                     </div>

                    <!-- Message Field -->
                    <div class="h-[158px] mt-4">
                        <label>Message</label>
                        <textarea
                        :class="[
                            'w-full h-24 px-4 py-3 mt-2 bg-portfolio-secondary-grey outline-none focus:ring-2',
                            v$.message.$error ? 'ring-2 ring-red-300 focus:ring-red-500' : 'focus:ring-green-500'
                        ]"
                            placeholder="How can I help?"
                            v-model="state.message">
                        </textarea>
                        <span v-if="v$.message.$error" class="text-red-700 mt-2 font-light">
                            {{ v$.message.$errors[0].$message }}
                        </span>
                    </div>

                    <!-- Submit Button -->
                    <button
                        @click="submitForm"
                        class="btnS w-[200px] h-12 mt-6 block bg-portfolio-primary-blue text-portfolio-secondary-lightgrey">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue' 
import BaseInput from '../components/BaseInput.vue'

export default {
    components: { BaseInput },
    setup() {
        const state = reactive({
            name: '',
            email: '',
            message: '',
        });

        const rules = computed(() => ({
            name: { required },
            email: { required, email },
            message: { required, minLength: minLength(25) }
        }));

        const v$ = useValidate(rules, state);

        return {
            state,
            v$,
        }
    },
    methods: {
        submitForm() {
            this.v$.$validate();
            if (!this.v$.$error) {
                alert('Success, form submitted!');
                this.resetForm();
            } else {
                alert('Error, form NOT submitted!');
                this.restyle();
            }
        },
        resetForm() {
            // Reset each field in the state to its initial empty string
            this.state.name = '';
            this.state.email = '';
            this.state.message = '';
            
            // Reset validation state for immediate feedback
            this.v$.$reset();
        },
        restyle() {
            console.log('ReWriteClass');            
        }
    } 
}; 
</script>


