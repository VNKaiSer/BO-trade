<!-- =========================================================================================
    File Name: SelectDropdownOptions.vue
    Description: Dropdown options in component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card title="Dropdown Options">
    <p>
      vue-select accepts arrays of strings or objects to use as options through
      the <code>options</code> prop
    </p>
    <div class="mt-5">
      <dropdown-options-basic></dropdown-options-basic>
      <dropdown-options-option-labels></dropdown-options-option-labels>
    </div>
  </vx-card>
</template>

<script>
import DropdownOptionsBasic from "./SelectDropdownOptions.vue";
import DropdownOptionsOptionLabels from "./SelectDropdownOptions.vue";

export default {
  data() {
    return {};
  },
  components: {
    DropdownOptionsBasic,
    DropdownOptionsOptionLabels,
  },
};
</script>
