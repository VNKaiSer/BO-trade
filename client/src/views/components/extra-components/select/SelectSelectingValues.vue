<!-- =========================================================================================
    File Name: SelectselectingValues.vue
    Description: Selecting value in select component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card title="Selecting Values">
    <!-- <p>vue-select accepts arrays of strings or objects to use as options through the <code>options</code> prop</p> -->
    <div>
      <selecting-values-default></selecting-values-default>
      <selecting-values-single-multiple-selection></selecting-values-single-multiple-selection>
      <selecting-values-tagging></selecting-values-tagging>
    </div>
  </vx-card>
</template>

<script>
import SelectingValuesDefault from "./SelectDropdownOptions.vue";
import SelectingValuesSingleMultipleSelection from "./SelectDropdownOptions.vue";
import SelectingValuesTagging from "./SelectSelectingValues.vue";

export default {
  components: {
    SelectingValuesDefault,
    SelectingValuesSingleMultipleSelection,
    SelectingValuesTagging,
  },
};
</script>
