<template>
<div class="p-4 md:p-8 bg-white w-full border border-[#e5e5e5] mb-[30px]">
            <button class="text-lg sm:text-[22px] leading-none font-bold capitalize mb-[46px] tracking-[0.25px] flex justify-between w-full">
              <span>Aviation Model Results</span>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1 7.9L12.5 6.5L6.5 0.5L0.5 6.5L1.9 7.9L6.5 3.3L11.1 7.9Z" fill="#010101" />
              </svg>
            </button>
            <ResultsBoxComponent/>
          </div>
</template>

<script>
import ResultsBoxComponent from './ResultsBoxComponent.vue';
export default {
    name: "ActivationModelComponent",
    components: { ResultsBoxComponent }
}
</script>