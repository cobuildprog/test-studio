<template>
<!-- ::::::::::::::::right side of the page:::::::::::::::: -->
<div class="w-full pt-5 lg:pt-[30px] px-5 lg:pl-0 lg pr-4:md:pr-[30px] h-[calc(100%-34px)]">
    <ul class="flex items-center gap-1.5 mb-3">
            <li>
              <a href="#" class="text-xs text-blue-dark font-normal">Anchors</a>
            </li>
            <li class="text-[#9C9C9C]">/</li>
            <li>
              <a href="#" class="text-xs text-[#9C9C9C] font-normal">Results Analysis</a>
            </li>
          </ul>
    <ActivationModelComponent/>
    <ResultsAnalysis/>
</div>
</template>
<script>
import ActivationModelComponent from './ActivationModelComponent.vue';
import ResultsAnalysis from './ResultsAnalysisComponent.vue';
export default {
    name: "MainRightComponent",
    components: { ActivationModelComponent, ResultsAnalysis }
}
</script>