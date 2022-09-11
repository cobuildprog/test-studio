<template>
 <!-- ::::::::::::::::box of the results:::::::::::::::: -->
 <div class="w-full grid sm:grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-2">
              <div class="text-center sm:border-r border-b xl:border-b-0 pb-6 xl:pb-0 border-[#e5e5e5]">
                <h5 class="text-base leading-5 font-semibold">Total Model Score</h5>
                <p class="font-semibold text-[40px] leading-[49px] text-[#0DCF83] mt-[15px] text-center">91%</p>
                <p class="text-xs leading-[15px] text-[#9C9C9C] font-normal max-w-[280px] w-full mx-auto mt-[18px]">A score combining the model’s default rate and the missed loans rate.</p>
              </div>
              <div class="text-center pt-5 sm:pt-0 border-b pb-6 xl:border-b-0 xl:pb-0 xl:border-r border-[#e5e5e5]">
                <h5 class="text-base leading-5 font-semibold">Default Rate</h5>
                <p class="font-semibold text-[40px] leading-[49px] text-[#0DCF83] mt-[15px] text-center">4.1%</p>
                <p class="text-xs leading-[15px] text-[#9C9C9C] font-normal max-w-[280px] w-full mx-auto mt-[18px]">95.9% of the loans that were recommended by the model, turned out to be successful</p>
              </div>
              <div class="text-center sm:border-r border-b pb-6 sm:border-b-0 border-[#e5e5e5] pt-5 xl:pt-0">
                <h5 class="text-base leading-5 font-semibold">Missed Loans Rate</h5>
                <p class="font-semibold text-[40px] leading-[49px] text-[#ED5554] mt-[15px] text-center">3.3%</p>
                <p class="text-xs leading-[15px] text-[#9C9C9C] font-normal max-w-[280px] w-full mx-auto mt-[18px]">The model recommended to provide a loan for 96.7% of all the successful loans.</p>
              </div>
              <div class="text-center pt-5 xl:pt-0">
                <h5 class="text-base leading-5 font-semibold">Avoided defaults</h5>
                <p class="font-semibold text-[40px] leading-[49px] text-[#0DCF83] mt-[15px] text-center">26/30</p>
                <p class="text-xs leading-[15px] text-[#9C9C9C] font-normal max-w-[280px] w-full mx-auto mt-[18px]">Default rate was reduced by 25.9% points from 30% to 4.1%.</p>
              </div>
            </div>
</template>

<script>
export default {
        name:"ResultBoxComponent"
    }
</script>