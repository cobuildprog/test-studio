<template>
    <div class="p-4 md:p-8">
              <p class="font-normal text-[13px] leading-5 text-[#4f4f4f] max-w-[626px] w-full mt-4 mb-5">Lorem, ipsum</p>
              <div class="w-full grid xl:grid-cols-[minmax(500px,896px),minmax(250px,665px)] xl:h-[600px] gap-6 xl:gap-0">
                <div class="w-full overflow-auto border-b border-[#E5E5E5] h-[500px] xl:h-full">
                  <table class="rounded-tr-sm w-full border border-[#e5e5e5] border-collapse">
                    <thead class="w-full">
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] pl-4 md:pl-[30px] pr-4 py-3.5 bg-[#F1F8FF] text-left">Loan Id</th>
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] px-4 py-3.5 bg-[#F1F8FF] text-left">Company Name</th>
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] px-4 py-3.5 bg-[#F1F8FF] text-left">Class</th>
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] px-4 py-3.5 bg-[#F1F8FF] text-left">Predicted value</th>
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] px-4 py-3.5 bg-[#F1F8FF] text-left">Actual Value</th>
                      <th class="text-sm leading-[22px] font-normal font-mont border-b border-b-[#4287DE] pr-4 md:pr-[30px] pl-4 py-3.5 bg-[#F1F8FF] text-left">
                        <div class="flex gap-1.5 items-center">
                          Model Performance
                          <button>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.3334 6.00002L10.3934 5.06002L6.66675 8.78002V0.666687H5.33341V8.78002L1.61341 5.05335L0.666748 6.00002L6.00008 11.3334L11.3334 6.00002Z" fill="#010101" />
                            </svg>
                          </button>
                        </div>
                      </th>
                    </thead>
                    <tbody>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#FFD9D9" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27793 6.27799C6.53262 6.0233 6.94555 6.0233 7.20024 6.27799L9.99996 9.07771L12.7997 6.27799C13.0544 6.0233 13.4673 6.0233 13.722 6.27799C13.9767 6.53268 13.9767 6.94562 13.722 7.20031L10.9223 10L13.722 12.7997C13.9767 13.0544 13.9767 13.4674 13.722 13.722C13.4673 13.9767 13.0544 13.9767 12.7997 13.722L9.99996 10.9223L7.20024 13.722C6.94555 13.9767 6.53262 13.9767 6.27793 13.722C6.02324 13.4674 6.02324 13.0544 6.27793 12.7997L9.07764 10L6.27793 7.20031C6.02324 6.94562 6.02324 6.53268 6.27793 6.27799Z" fill="#DD4D4D" />
                          </svg>
                        </td>
                      </tr>
                      <tr class="border-b border-[#e5e5e5] group transition-all duration-200 hover:bg-[#FAFAFA]">
                        <td class="leading-4 py-4 text-xs font-mont pr-4 pl-4 md:pl-[30px]">123456</td>
                        <td class="font-semibold leading-4 py-4 text-xs font-mont px-4">Company A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Class A</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Default</td>
                        <td class="leading-4 py-4 text-xs font-mont px-4">Success</td>
                        <td class="leading-4 py-4 text-xs font-mont pl-4 pr-4 md:pr-[30px]">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#E6FFF5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4419 6.43306C15.686 6.67714 15.686 7.07286 15.4419 7.31694L9.19194 13.5669C8.94786 13.811 8.55214 13.811 8.30806 13.5669L5.18306 10.4419C4.93898 10.1979 4.93898 9.80214 5.18306 9.55806C5.42714 9.31398 5.82286 9.31398 6.06694 9.55806L8.75 12.2411L14.5581 6.43306C14.8021 6.18898 15.1979 6.18898 15.4419 6.43306Z" fill="#0DCF83" />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="w-full p-[30px] border border-[#E5E5E5]">
                  <h4 class="text-base font-bold text-[#010101]">Company A - 123456</h4>
                  <p class="flex items-center gap-2 text-[13px] text-[#010101] font-semibold mt-11 mb-5">
                    Values Impact
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.41675 3.08335H6.58341V4.25002H5.41675V3.08335ZM5.41675 5.41669H6.58341V8.91669H5.41675V5.41669ZM6.00008 0.166687C2.78008 0.166687 0.166748 2.78002 0.166748 6.00002C0.166748 9.22002 2.78008 11.8334 6.00008 11.8334C9.22008 11.8334 11.8334 9.22002 11.8334 6.00002C11.8334 2.78002 9.22008 0.166687 6.00008 0.166687ZM6.00008 10.6667C3.42758 10.6667 1.33341 8.57252 1.33341 6.00002C1.33341 3.42752 3.42758 1.33335 6.00008 1.33335C8.57258 1.33335 10.6667 3.42752 10.6667 6.00002C10.6667 8.57252 8.57258 10.6667 6.00008 10.6667Z" fill="#4286DD" />
                    </svg>
                  </p>

                  <img src="../assets/images/chart.svg" alt="Chart" class="w-full h-auto object-contain mb-10" />

                  <p class="flex items-center gap-2 text-[13px] text-[#010101] font-semibold mt-11 mb-2.5">Values</p>

                  <ul class="text-xs text-[#010101] space-y-1.5">
                    <li class="flex items-center gap-3">
                      <span class="block w-24 text-[#7f7f7f]">Loan date</span>
                      <span class="block w-24">2018</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <span class="block w-24 text-[#7f7f7f]">Loan Amount</span>
                      <span class="block w-24">$3M</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
</template>
<script>
export default {
        name:"TableAndCompanyComponent"
    }
</script>