<template>
  <div id="app">
    <div class="container-fluid border">
      <div class="row">
        <div class="col-9 vh-100 bg-dark text-white d-flex align-items-center justify-content-center">
          <router-view :key="$route.path" />
        </div>
        <div class="border col-3 bg-info vh-100">
          <h3 class="text-center my-5">Inventory</h3>
          <ul>
            <li v-for="item in inventory" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer class="text-center">
    <p>&copy; Copyright 2023, Michael Jewett</p>
  </footer>
</template>

<script>
import { ref } from "vue";
import { getInventory } from "@/utils/inventory";

export default {
  setup() {
    const inventory = ref(getInventory());

    return {
      inventory,
    };
  },
};
</script>
