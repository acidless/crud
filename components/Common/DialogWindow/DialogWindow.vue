<template>
  <dialog v-if="isOpened" @mousedown="closeWindow" class="dialog-wrapper">
    <div class="dialog-inner">
      <slot></slot>
    </div>
  </dialog>
</template>

<script>
export default {
  name: 'DialogWindow',
  props: {
    isOpened: {
      type: Boolean,
      required: true,
    },
    setOpened: Function,
  },
  methods: {
    closeWindow(e) {
      e.stopPropagation();

      if (e.target === e.currentTarget) {
        this.$props.setOpened && this.$props.setOpened(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-inner {
    position: static;
    min-width: 30em;
    padding: 2em;
    background: var(--task-bg);
    border: none;
    border-radius: 0.5em;
  }
}
</style>
