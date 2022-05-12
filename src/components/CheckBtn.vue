<template>
  <v-btn depressed :color="checked ? 'primary' : ''" @click="change">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    label: String,
    checked: Boolean,
  },
  methods: {
    change() {
      this.$emit("change");
    },
  },
};
</script>
