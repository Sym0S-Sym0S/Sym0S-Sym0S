<template>
  <div class="bg-white shadow p-6 rounded-lg max-w-7xl w-full">
    <!-- Form Wrapper -->
    <form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show" class="space-y-4">
      <!-- Email Input -->
      <div>
        <label for="input-1" class="block text-sm font-medium text-gray-700">Email address:</label>
        <input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        <p class="mt-1 text-sm text-gray-500">We'll never share your email with anyone else.</p>
      </div>

      <!-- Name Input -->
      <div>
        <label for="input-2" class="block text-sm font-medium text-gray-700">Your Name:</label>
        <input id="input-2" v-model="form.name" required placeholder="Enter name"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      <!-- Food Select -->
      <div>
        <label for="input-3" class="block text-sm font-medium text-gray-700">Food:</label>
        <select id="input-3" v-model="form.food" required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option v-for="food in foods" :key="food.value" :value="food.value">
            {{ food.text || food }}
          </option>
        </select>
      </div>

      <!-- Checkbox Group -->
      <div>
        <fieldset>
          <legend class="block text-sm font-medium text-gray-700">Options:</legend>
          <div class="mt-2 space-y-2">
            <div>
              <input id="check-me" type="checkbox" value="me" v-model="form.checked"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label for="check-me" class="ml-2 text-sm text-gray-700">Check me out</label>
            </div>
            <div>
              <input id="check-that" type="checkbox" value="that" v-model="form.checked"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label for="check-that" class="ml-2 text-sm text-gray-700">Check that out</label>
            </div>
          </div>
        </fieldset>
      </div>

      <!-- Submit and Reset Buttons -->
      <div class="flex space-x-2">
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </button>
        <button type="reset" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Reset
        </button>
      </div>
    </form>

    <!-- Result Card -->
    <div v-if="!show" class="mt-4 p-4 border rounded bg-white shadow-md">
      <h2 class="text-lg font-medium mb-2">Form Data Result:</h2>
      <pre class="bg-gray-100 p-2 rounded">{{ form }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        { text: 'Carrots', value: 'Carrots' },
        { text: 'Beans', value: 'Beans' },
        { text: 'Tomatoes', value: 'Tomatoes' },
        { text: 'Corn', value: 'Corn' },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
    onReset() {
      // Reset form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>