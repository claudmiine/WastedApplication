<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  title: {
  type: String,
  required: true
  },
  imageSrc: {
  type: String,
  required: true
  }
})
</script>

<template>
  <main>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    
    <h3 class="joinus"> {{title}}</h3>
      <h3>Wasted helps you to make your waste management easier.</h3>
    <img :src="imageSrc" alt="Recycling photo"/>
</div>
</main>
</template>