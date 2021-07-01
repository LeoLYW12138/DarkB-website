<template>
  <span class="rounded-default bg-opacity-80 absolute"
    >{{ text }}
    <span
      class="border-5 border-gray-400 border-opacity-80 absolute"
      :class="tooltip"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'tooltip',
    },
    direction: {
      type: String,
      default: '',
      validator(dir) {
        const directions = ['top', 'right', 'bottom', 'left'];
        return directions.includes(dir);
      },
    },
  },
  computed: {
    tooltip() {
      return `tooltip-${this.direction}`;
    },
  },
};
</script>

<style scoped>
.tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
}
.tooltip-right {
  left: 100%;
  transform: translateY(50%);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.tooltip-bottom {
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.tooltip-left {
  right: 100%;
  transform: translateY(50%);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
</style>