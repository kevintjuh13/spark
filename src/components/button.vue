<template>
  <v-btn
    :icon="icon"
    :min-width="width"
    :min-height="height"
    :append-icon="appendIcon"
    :rounded="rounded"
    :size="size"
    :variant="variant"
    :border="border"
    >{{ buttonText }}</v-btn
  >
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String
    },
    border: {
      type: String
    },
    variant: {
      type: String
    },
    size: {
      type: String
    },
    rounded: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    appendIcon: {
      type: Boolean
    },
    icon: {
      type: Boolean
    }
  }
}
</script>
