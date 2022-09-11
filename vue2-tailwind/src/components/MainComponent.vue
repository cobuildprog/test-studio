<template>
    <div class="h-[calc(100vh-48px)] overflow-auto bg-[#f6f6f6] pb-5">
        <main class="w-full grid grid-cols-1 grid-rows-[min-content_1fr] lg:grid-rows-none lg:grid-cols-[minmax(180px,220px),minmax(470px,1fr)] lg:gap-[30px]">
            <SideBarComponent/>
            <MainRightComponent/>
        </main>
    </div>
</template>
<script>
import SideBarComponent from "../components/SideBarComponent.vue";
import MainRightComponent from "./MainRightComponent.vue";
export default{
    name: "MainComponent",
    components: { SideBarComponent, MainRightComponent }
}
</script>