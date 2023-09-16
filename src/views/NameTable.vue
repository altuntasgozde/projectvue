<template>
  <div>
    <DataTable
      :value="mergedData"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
      
    >
      <Column field="name" header="First Name"></Column>
      <Column field="surname" header="Surname"></Column>
      <Column field="age" header="Age"></Column>
      <Column field="schoolNumber" header="School Number"></Column>
      <Column field="location" header="Location"></Column>
    </DataTable>
  </div>
</template>
  
  <script>
import { watch,ref, onMounted, computed } from "vue";
import axios from "axios";

export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const axiosData = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64fd9262596493f7af7e55ce.mockapi.io/students"
        );
        axiosData.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    watch(
      () => props.tableData,
      () => {
        console.log("Table data changed:", props.tableData);
      }
    );
    onMounted(() => {
      fetchData();
    });

    const mergedData = computed(() => {
      return [...axiosData.value, ...props.tableData,];
    });

    return {
      mergedData,
    };
  },
};
</script>