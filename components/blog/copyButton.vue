<template>
  <button ref="copy" class="right-2 bottom-2 absolute" :aria-label="state">
    <IconCopied
      v-if="state === 'copied'"
      class="h-5 text-white text-opacity-80 w-5"
    ></IconCopied>
    <IconCopy
      v-else
      class="h-5 text-white text-opacity-40 w-5 hover:text-opacity-70"
    ></IconCopy>
    <tooltip
      :text="state"
      class="bg-gray-400 text-sm text-black py-1 px-2 top-[125%] -left-5"
      :class="[state === 'copied' ? 'block' : 'hidden']"
      direction="top"
    ></tooltip>
  </button>
</template>

<script>
import Clipboard from 'clipboard';
import tooltip from '@/components/blog/tooltip.vue';
import IconCopy from '@/assets/icons/copy.svg?inline';
import IconCopied from '@/assets/icons/copied.svg?inline';

export default {
  components: {
    tooltip,
    IconCopy,
    IconCopied,
  },
  data() {
    return {
      state: 'init',
    };
  },
  mounted() {
    const copyCode = new Clipboard(this.$refs.copy, {
      target(trigger) {
        return trigger.previousElementSibling;
      },
    });
    copyCode.on('success', (event) => {
      event.clearSelection();
      this.state = 'copied';
      window.setTimeout(() => {
        this.state = 'init';
      }, 2000);
    });
  },
};
</script>