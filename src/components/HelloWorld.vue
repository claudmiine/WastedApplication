<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<template>
<h1>dupa</h1>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
green {
font-weight: 400;
}
.joinus {
font-weight: bold;
}
.greetings h1{
font-weight: bold;
color: #333333;
}
.greetings h3 {
  text-align: left;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
