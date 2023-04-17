<template>
  <div class="input-container">
    <label class="input-text-label">{{ label }}</label>
    <input
      class="input-text-content"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <p class="input-error" v-if="error.$error">
      {{ showError(error) }}
    </p>
  </div>
</template>
<script>
import { getError } from "../utils/errorMessages";
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: Object,
      required: false,
    },
    value: String,
  },
  methods: {
    showError(propertie) {
      return getError(propertie);
    },
  },
};
</script>
<style>
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  width: 100%;
}

.input-text-label {
  align-self: flex-start;
  color: #b1daed;
  font-size: 18px;
  margin-bottom: 2px;
  font-family: "Kalam Bold";
}

.input-text-content {
  border-radius: 5px;
  height: 38px;
}

.input-error {
  color: red;
  text-align: left;
  margin: 0;
}
</style>
