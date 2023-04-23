import { createRouter, createWebHistory } from "vue-router";
import CustomScene from "@/scenes/CustomScene.vue";
import roomsData from "@/data/rooms.json";

const routes = [];

// Iterate over the rooms and create a route for each one
for (const room of roomsData) {
  routes.push({
    path: `/${room.id}`,
    name: room.id,
    component: CustomScene,
    props: {
      roomId: room.id,
      possibleItems: room.possibleItems,
    },
  });
}

// Add a catch-all route that redirects to the first room
routes.push({
  path: "/:catchAll(.*)",
  redirect: `/${roomsData[0].id}`,
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;