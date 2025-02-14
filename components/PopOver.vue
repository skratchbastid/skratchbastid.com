<template>
    
  <div class="fixed inset-0 flex items-center justify-center z-50" v-if="showPopover" @click="dismissPopover">
    <div class="bg-white rounded-lg p-8 shadow-lg relative z-10" @click.stop>
      <slot></slot>
      hi
    </div>
    <div class="fixed inset-0 bg-black opacity-50"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopover: false,
      impressions: 0,
      maxImpressions: 3
    }
  },
  mounted() {
    this.impressions = parseInt(localStorage.getItem('popoverImpressions')) || 0;
    if (this.impressions < this.maxImpressions) {
      this.showPopover = true;
    }
  },
  methods: {
    dismissPopover() {
      this.showPopover = false;
      this.impressions++;
      localStorage.setItem('popoverImpressions', this.impressions);
    }
  }
}
</script>

<style scoped>
.fixed {
  backdrop-filter: blur(5px);
}
</style>
