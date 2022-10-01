<template>
  <div>hello</div>
</template>

<script>
export default {
  name: "my-test",
  mounted() {
    this.add(1, 2);
  },
  methods: {
    add(a, b) {
      console.log("add", a + b);
    },
  },
};
</script>

<style scoped>
</style>
