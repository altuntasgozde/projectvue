<script>

import { ref } from "vue";
import NameInput from './views/NameInput.vue';
import NameTable from './views/NameTable.vue';

export default {
  components: {
    NameInput,
    NameTable,
  },
  setup() {
    const tableData = ref([]);
    const showNameInput = ref(true);


    const onAddName = (data) => {
      tableData.value.push(data);
      showNameInput.value = false;

    };

    return {
      tableData,
      onAddName,
      showNameInput

    };
  },
};
</script>

<template>
  <main>
     <div class="wrapper">
      <NameInput v-if="showNameInput" @addName="onAddName" />
      <NameTable v-else :tableData="tableData" />
    </div> 
    <!-- <RouterView /> -->
  </main>
</template>

<style scoped>
</style>