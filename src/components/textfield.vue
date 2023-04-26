<template>
  <div>
    <v-text-field
      v-model="textFieldValue"
      :append-icon="appendIcon"
      :clearable="clearable"
      :color="color"
      :counter="counter"
      :disabled="disabled"
      :error="error"
      :error-messages="errorMessages"
      :label="label"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :rules="rules"
      :type="type"
      :validation-value="validationValue"
      :validate-on="validateOn"
      :variant="variant"
    />
  </div>
</template>
<script>
export default {
  props: {
    appendIcon: {
      type: String
    },
    clearable: {
      type: Boolean
    },
    color: {
      type: String
    },
    counter: {
      type: [Boolean, Number]
    },
    disabled: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    errorMessages: {
      type: [String, Array],
      default: () => []
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean
    },
    rules: {
      type: Array,
      default: () => []
    },
    type: {
      type: String
    },
    validationValue: {
      type: [String, Number]
    },
    validateOn: {
      type: String,
      default: 'change'
    },
    variant: {
      type: String
    }
  },
  data() {
    return {
      textFieldValue: ''
    }
  }
}
</script>
