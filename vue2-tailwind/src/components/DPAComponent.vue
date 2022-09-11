<template>
      <div class="p-4 md:p-8">
              <h2 class="font-semibold text-base leading-5">Probability of Default Accuracy</h2>
              <p class="font-normal text-[13px] leading-5 text-[#4f4f4f] max-w-[626px] w-full mt-4 mb-[26px]">The model predicts the total risk that is a ssociated with making an investment in the company. Compare the estimated risk of companies in the test set with the default rate outcome:</p>
              <div class="w-full grid grid-cols-1 xl:grid-cols-[minmax(500px,1fr),minmax(100px,260px)] 2xl:grid-cols-[minmax(500px,1060px),minmax(250px,460px)] gap-10">
                <div class="w-full overflow-auto pb-5 md:pb-0">
                  <table class="rounded-tr-sm w-[768px] md:w-full border border-[#e5e5e5]">
                    <thead class="w-full">
                      <th class="text-sm leading-[22px] font-normal font-mont px-4 2xl:px-[30px] py-3.5 bg-[#F1F8FF] text-left">Risk Level</th>
                      <th class="text-sm leading-[22px] font-normal font-mont px-4 2xl:px-[30px] py-3.5 bg-[#F1F8FF] text-left">No. of companies</th>
                      <th class="text-sm leading-[22px] font-normal font-mont px-4 2xl:px-[30px] py-3.5 bg-[#F1F8FF] text-left">No. of defaults</th>
                      <th class="text-sm leading-[22px] font-normal font-mont px-4 2xl:px-[30px] py-3.5 bg-[#F1F8FF] text-left">Predicted vs. Actual</th>
                    </thead>
                    <tbody>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L1</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">0%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                                <span class="relative">
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 right-1 clip-path-box"></span>
                                </span>
                              </div>
                              <span class="absolute top-full right-0 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">0.35%</span>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">0.4%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L2</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">2</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">0.4%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F] flex items-center gap-2.5">
                              <span>0.8%</span>
                              <span class="relative">
                                <span class="w-[9px] h-[9px] bg-[#ED5554] block clip-path-box"></span>
                                <span class="absolute top-full -left-1.5 text-[10px] font-normal text-[#ED5554] leading-4">0.85%</span>
                              </span>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L3</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">0.8%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5] relative"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative">
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 right-[5px] clip-path-box"></span>
                                </span>
                                <span class="absolute top-full right-5 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">0.9%</span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">1%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L4</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">4</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">1%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5] relative"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative">
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 left-0 clip-path-box"></span>
                                </span>
                                <span class="absolute top-full right-5 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">1.35%</span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">1.5%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L5</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">4</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">1.5%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                                <span class="relative">
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 right-1 clip-path-box"></span>
                                </span>
                              </div>
                              <span class="absolute top-full right-0 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">2.75%</span>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">3%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L6</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">3</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">3.2%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F] flex items-center gap-2.5">
                              <span>4.2%</span>
                              <span class="relative">
                                <span class="w-[9px] h-[9px] bg-[#ED5554] block clip-path-box"></span>
                                <span class="absolute top-full -left-1.5 text-[10px] font-normal text-[#ED5554] leading-4">5.3%</span>
                              </span>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L7</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F] flex items-center gap-2.5">
                              <span class="relative">4.2%</span>
                              <span class="relative">
                                <span class="w-[9px] h-[9px] bg-[#ED5554] block clip-path-box"></span>
                                <span class="absolute top-full -left-1.5 text-[10px] font-normal text-[#ED5554] leading-4">3.15%</span>
                              </span>
                            </span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"></span>
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F] flex items-center gap-2.5">
                              <span class="relative">6%</span>
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L8</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">6%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative">
                                  <span class="absolute top-[180%] right-0 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">7.9%</span>
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 right-[5px] clip-path-box"></span>
                                </span>
                                <span class="w-full border-r border-[#e5e5e5] relative"> </span>
                                <span></span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">8%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L9</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">8%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative">
                                  <span class="absolute top-[180%] left-0 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">8.55%</span>
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 left-0 clip-path-box"></span>
                                </span>
                                <span class="w-full border-r border-[#e5e5e5] relative"> </span>
                                <span></span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">9.5%</span>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5]">
                        <td class="font-semibold leading-[47px] text-[13px] font-mont px-[30px]">L10</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">50</td>
                        <td class="font-normal leading-[47px] text-[13px] font-mont px-[30px]">1</td>
                        <td class="font-normal text-[13px] font-mont px-[30px]">
                          <div class="flex items-center gap-1">
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">9.5%</span>
                            <div class="max-w-[85px] w-full relative">
                              <div class="rounded-[10px] border border-[#e5e5e5] w-full h-2.5 grid grid-cols-4 pb-[3px]">
                                <span class="w-full border-r border-[#e5e5e5]"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative"> </span>
                                <span class="w-full border-r border-[#e5e5e5] relative">
                                  <span class="absolute top-[180%] left-0 inline-block text-[10px] font-normal text-[#4CAF50] leading-4">10.55%</span>
                                  <span class="w-[9px] h-[9px] bg-[#4CAF50] inline-block absolute top-0 left-0 clip-path-box"></span>
                                </span>
                                <span></span>
                              </div>
                            </div>
                            <span class="text-[10px] leading-4 font-normal text-[#4F4F4F]">X%</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="w-full">
                  <p class="text-center p-5 text-base font-normal leading-[22px] text-black h-[119px] border border-[#cccccc]">TBD</p>
                </div>
              </div>
            </div>
</template>

<script>
export default {
        name:"DPAComponent"
    }
</script>