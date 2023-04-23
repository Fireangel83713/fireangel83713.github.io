<template>
  <div class="custom-scene">
    <h2>{{ scene.title }}</h2>
    <div class="col-sm-5 col-md-7 col-lg-8 mx-auto d-block" v-if="scene.image">
    <img class="img-fluid" :src="require(`@/assets/${scene.image}`)" alt="Scene image">
    </div>
    <p class="d-block mx-auto col-sm-5 col-md-7 col-lg-8 text-center mt-3">{{ scene.description }}</p>

    <div v-if="scene.item">
      <p>
        You found an item: {{ scene.item }}
        <button @click="addToInventory(scene.item)">Pick up</button>
      </p>
    </div>

    <div class="d-flex justify-content-center">
      <button class="ms-3"
        v-for="(choice, index) in scene.choices"
        :key="index"
        @click="goToNextScene(choice.nextScene)"
      >
        {{ choice.text }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getRoomById } from "@/utils/rooms";
import {
  addItemToInventory,
  /* eslint-disable */
  removeItemFromInventory,
  hasItemInInventory,
} from "@/utils/inventory";

export default {
  props: {
    roomId: String,
    inventory: Array,
  },
  setup(props) {
    const router = useRouter();
    const scene = ref({});

    onMounted(() => {
      scene.value = getRoomById(props.roomId);
    });

    function addToInventory(item) {
      addItemToInventory(item, props.inventory);
    }

    function goToNextScene(nextScene) {
      router.push({ name: nextScene });
    }

    return {
      scene,
      addToInventory,
      goToNextScene,
    };
  },
};
</script>

<style scoped>
/* Add any CustomScene-specific styles here */
</style>
