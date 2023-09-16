<template>
  <div class="form">
    <div class="form-group">
      <label for="name">First Name:</label>
      <InputText v-model="name" id="name" placeholder="Enter your first name" />
    </div>
    <div class="form-group">
      <label for="surname">Surname:</label>
      <InputText v-model="surname" id="surname" placeholder="Enter your surname" />
    </div>
    <div class="form-group">
      <label for="age">Age:</label>
      <InputText v-model="age" id="age" placeholder="Enter your age" @input="validateAge" :class="{ 'is-invalid': ageError }" />
      <div v-if="ageError" class="invalid-feedback">Please enter a valid age.</div>
    </div>
    <div class="form-group">
      <label for="schoolNumber">School Number:</label>
      <InputText v-model="schoolNumber" id="schoolNumber" placeholder="Enter your schoolNumber" @input="validateSchoolNumber" :class="{ 'is-invalid': schoolNumberError }" />
      <div v-if="schoolNumberError" class="invalid-feedback">Please enter a valid school number.</div>
    </div>
    <div class="form-group">
      <label for="location">Location:</label>
      <InputText v-model="location" id="location" placeholder="Enter your location" />
    </div>
    <Button class="add-btn" @click="addName" :disabled="ageError || schoolNumberError">Add</Button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
  emits: ['addName'],
  setup(props, context) {
    const name = ref('');
    const surname = ref('');
    const age = ref('');
    const schoolNumber = ref('');
    const location = ref('');
    const ageError = ref(false);
    const schoolNumberError = ref(false);

    const router = useRouter();

    const addName = () => {
      if (!ageError.value && !schoolNumberError.value) {
        const data = {
          name: name.value,
          surname: surname.value,
          age: age.value,
          schoolNumber: schoolNumber.value,
          location: location.value,
        };
        context.emit('addName', data);

        name.value = '';
        surname.value = '';
        age.value = '';
        schoolNumber.value = '';
        location.value = '';
      }

      router.push('/table');
    };

    const validateAge = () => {
      const ageValue = Number(age.value);
      if (isNaN(ageValue) || ageValue < 0) {
        ageError.value = true;
      } else {
        ageError.value = false;
      }

    };

    const validateSchoolNumber = () => {
      const schoolNumberValue = Number(schoolNumber.value);
      if (isNaN(schoolNumberValue) || schoolNumberValue < 0) {
        schoolNumberError.value = true;
      } else {
        schoolNumberError.value = false;
      }
    };

    return {
      name,
      surname,
      age,
      schoolNumber,
      location,
      addName,
      validateAge,
      validateSchoolNumber,
      ageError,
      schoolNumberError,
    };
  },
};
</script>
<style scoped>

.form {
  width: 50%;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.add-btn {
  margin-top:10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
