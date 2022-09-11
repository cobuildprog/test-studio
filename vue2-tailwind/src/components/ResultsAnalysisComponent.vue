<template>
    <div class="bg-white w-full border border-[#e5e5e5] mb-[30px]">
            <h2 class="text-lg sm:text-[22px] leading-none font-bold capitalize tracking-[0.25px] flex justify-between w-full p-4 md:p-8 border-b border-[#e5e5e5] mb-8">Results Analysis</h2>
            <DPAComponent/>
            <!-- ::::::::::::::::test data anaylsis:::::::::::::::: -->
            <TDAComponent/>
            <!-- -----[TABLE AND COMPANY]----- -->
            <TableAndCompanyComponent/>
          </div>
</template>


<script>
import DPAComponent from './DPAComponent.vue';
import TDAComponent from './TDAComponent.vue';
import TableAndCompanyComponent from './TableAndCompanyComponent.vue';
export default {
    name: "ResultsAnalysisComponent",
    components: { DPAComponent, TDAComponent, TableAndCompanyComponent }
}
</script>