<template>
 <aside class="sidebar bg-white w-full lg:h-full transition-all duration-300 origin-top max-h-0 overflow-auto invisible pointer-events-none open:pointer-events-auto open:visible lg:visible lg:pointer-events-auto open:max-h-screen lg:max-h-full">
          <ul>
            <li class="relative">
              <a href="#" v-on:click="drop1 = !drop1" class="dropdown-link text-sm leading-[45px] text-blue-dark flex justify-between items-center gap-4 px-5 border-b borders">
                <span>Fund Name </span>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#a)">
                    <path d="m7 10 5 5 5-5H7Z" fill="#4286DD" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <ul class="dropdown" v-if="drop1">
                <li>
                  <a href="#" class="text-sm leading-9 text-blue-dark capitalize">someThing</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-9 text-blue-dark capitalize">someThing</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-9 text-blue-dark capitalize">someThing</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-9 text-blue-dark capitalize">someThing</a>
                </li>
                <li>
                  <a href="#" class="text-sm leading-9 text-blue-dark capitalize">someThing</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="px-3 mt-4">
            <li class="mb-1.5">
              <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:text-white hover:bg-blue-600 w-full inline-block px-4">Models</a>
            </li>
            <li class="mb-1.5">
              <a href="#" v-on:click="drop2 = !drop2" class="dropdown-link text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:text-white hover:bg-blue-600 w-full inline-block px-4 main-menu-active">Model X</a>
              <ul class="mt-1.5 dropdown pl-0" v-if="drop2">
                <li class="mb-1.5">
                  <a href="#" class="dropdown-link text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#d3e6f8] w-full inline-block pl-4 sub-menu-active">Anchor</a>
                  <ul class="pl-5 mt-1.5 dropdown pr-0">
                    <li class="mb-1.5">
                      <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#f7f1f1] w-full inline-block px-4">Upload File</a>
                    </li>
                    <li class="mb-1.5">
                      <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#f7f1f1] w-full inline-block px-4">Data Analysis</a>
                    </li>
                    <li class="mb-1.5">
                      <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#f7f1f1] w-full inline-block px-4">Features Analysis</a>
                    </li>
                    <li class="mb-1.5">
                      <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#f7f1f1] w-full inline-block px-4 tertiory-menu-active">Results Analysis</a>
                    </li>
                  </ul>
                </li>
                <li class="mb-1.5">
                  <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#d3e6f8] w-full inline-block px-4">Modifier</a>
                </li>
                <li class="mb-1.5">
                  <a href="#" class="text-sm font-medium leading-[45px] rounded-[6px] text-blue-dark hover:bg-[#d3e6f8] w-full inline-block px-4"> Model Configuration</a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
  </template>
  
  <script>
  export default {
  name: 'SideBarComponent',
  data:() =>{
    return {
      drop1 : false,
      drop2 : false
    }
  },
  methods: {
    toggleDrop1: (event) => {
      event.preventDefault();
      this.drop1 = this.drop1 ? false : true;
    },
    toggleDrop2: (event) => {
      event.preventDefault();
      this.drop2 = this.drop2 ? false : true;
    }
  }
  }
  </script>

  <style scoped>
  </style>
  