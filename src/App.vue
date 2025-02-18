<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<template>
  <router-view class="wrapper" v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component
        v-if="slotProps.Component"
        :is="slotProps.Component"
        class="component"
      ></component>
      <div v-else>No component found</div>
    </transition>
  </router-view>
</template>

<style scoped>
</style>
