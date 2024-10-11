<template>
    <div class="flex flex-col">
      <label class="mb-2 mt-2" >{{ label }}</label>
      <input
        v-bind="$attrs"        
        :placeholder="placeholder"
        :value="modelValue"                        
        :class="[
                'w-full px-4 pb-3 pt-3 bg-portfolio-secondary-grey outline-none focus:ring-2',
                hasError ? 'ring-2 ring-red-300 focus:ring-red-500' : 'focus:ring-green-500'
            ]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
</template>

<script>
export default {
    props: {
       label: { type: String, default: '' },
       placeholder: { type: String, default: ' ' },
       modelValue: { type: [String, Number], default: '' },
       hasError: { type: Boolean, default: false }
    }
}
</script>