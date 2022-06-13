<template lang="pug">
    .main 
        Header
        Nav
</template>

<script>
import Header from "~/components/header.vue";
import Nav from "~/components/navSection.vue";

export default {
  name: "IndexPage",
  components: {
    Header,
    Nav,
  },
};
</script>
