<template>
     <div class="px-3 sm:px-8 mb-6">
              <div class="md:p-8 pb-12 sm:pb-[75px] border-b border-[#e5e5e5]">
                <h2 class="text-[22px] leading-none font-bold capitalize tracking-[0.25px] flex justify-between w-full border-t border-[#e5e5e5] mb-5 pt-12 px-5 sm:px-0">Test Data Analysis</h2>
                <p class="text-[13px] leading-4 font-normal text-[#4f4f4f] mb-9 px-5 sm:px-0">The model accuracy was tested based on an unseen portion of the dataset (30%). Below are the results of this test:</p>
                <div class="max-w-[600px] w-full">
                  <p class="text-[13px] font-semibold text-[#4f4f4f] leading-4 text-center">Predicted Result</p>
                  <div class="w-full grid sm:grid-cols-[24px,1fr] gap-2 mt-2.5 items-center">
                    <p class="text-[13px] leading-6 text-[#4f4f4f] font-semibold whitespace-nowrap sm:transform sm:-rotate-90 sm:mt-12">Actual Result</p>
                    <div class="w-full grid sm:grid-cols-2 gap-2.5">
                      <div class="flex items-end">
                        <div class="h-[calc(100%-24px)] flex items-center">
                          <p class="text-[13px] leading-6 text-[#4f4f4f] font-semibold transform -rotate-90 w-6 mt-5 hidden sm:inline-block">Success</p>
                        </div>
                        <div class="sm:max-w-[260px] w-full">
                          <p class="text-[13px] leading-6 text-[#4f4f4f] font-normal text-center">Success</p>
                          <div class="w-full border-2 border-[#0DCF83] rounded-[3px] py-[18px] px-4 text-center">
                            <p class="text-[13px] leading-6 text-black font-normal">True “Success” Predictions</p>
                            <p class="font-medium text-base leading-4 text-black my-5 text-center">353 deals</p>
                            <p class="text-[13px] leading-6 text-black font-normal">67.6% of predicted results</p>
                          </div>
                        </div>
                      </div>
                      <div class="w-full">
                        <p class="text-[13px] leading-6 text-[#4f4f4f] font-normal text-center">Default</p>
                        <div class="w-full border-2 border-[#ED5554] rounded-[3px] py-[18px] px-4 text-center">
                          <p class="text-[13px] leading-6 text-black font-normal">False “Default” Predictions</p>
                          <p class="font-medium text-base leading-4 text-black my-5 text-center">12 deals</p>
                          <p class="text-[13px] leading-6 text-black font-normal">2.3% of predicted results</p>
                        </div>
                      </div>
                      <div class="flex items-end order-4 sm:order-3">
                        <div class="h-[calc(100%-24px)] flex items-center">
                          <p class="text-[13px] leading-6 text-[#4f4f4f] font-semibold transform -rotate-90 w-6 hidden sm:inline-block">Default</p>
                        </div>
                        <div class="sm:max-w-[260px] w-full">
                          <p class="text-[13px] leading-6 text-[#4f4f4f] font-normal text-center sm:hidden">Default</p>
                          <div class="w-full border-2 border-[#ED5554] rounded-[3px] py-[18px] px-4 text-center">
                            <p class="text-[13px] leading-6 text-black font-normal">False “Success” Predictions</p>
                            <p class="font-medium text-base leading-4 text-black my-5 text-center">15 deals</p>
                            <p class="text-[13px] leading-6 text-black font-normal">2.9% of predicted results</p>
                          </div>
                        </div>
                      </div>
                      <div class="w-full order-3 sm:order-4">
                        <p class="text-[13px] leading-6 text-[#4f4f4f] font-normal text-center sm:hidden">Success</p>
                        <div class="w-full border-2 border-[#0DCF83] rounded-[3px] py-[18px] px-4 text-center">
                          <p class="text-[13px] leading-6 text-black font-normal">True “Default” Predictions</p>
                          <p class="font-medium text-base leading-4 text-black my-5 text-center">142 deals</p>
                          <p class="text-[13px] leading-6 text-black font-normal">27.2% of predicted results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 flex items-center gap-1.5 max-w-[506px] w-full mx-auto">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1002_84342)">
                        <path d="M6.41663 4.08332H7.58329V5.24999H6.41663V4.08332ZM6.41663 6.41666H7.58329V9.91666H6.41663V6.41666ZM6.99996 1.16666C3.77996 1.16666 1.16663 3.77999 1.16663 6.99999C1.16663 10.22 3.77996 12.8333 6.99996 12.8333C10.22 12.8333 12.8333 10.22 12.8333 6.99999C12.8333 3.77999 10.22 1.16666 6.99996 1.16666ZM6.99996 11.6667C4.42746 11.6667 2.33329 9.57249 2.33329 6.99999C2.33329 4.42749 4.42746 2.33332 6.99996 2.33332C9.57246 2.33332 11.6666 4.42749 11.6666 6.99999C11.6666 9.57249 9.57246 11.6667 6.99996 11.6667Z" fill="#4286DD" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1002_84342">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p class="font-normal text-[13px] leading-[15px] text-[#4F4F4F]">The optimal probability threshold of the current model is: 20 <a href="#" class="text-[#4286DD]"> Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
</template>

<script>
export default {
        name:"TDAComponent"
    }
</script>