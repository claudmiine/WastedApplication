<template>
  <main>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->
    
    <h3 class="joinus"> Join us and let’s change the world together!</h3>
      <h3>Wasted helps you to make your waste management easier.</h3>
    <img alt="Recycling photo" class="recycling" src="@/assets/recycling.png" width="300" height="300" />
    
    
          <button><router-link to="/login">Login</router-link></button>
           <button><router-link to="/register">Register</router-link></button>

      <h3 class="joinus"> Personal experience</h3>
      <p>Create personalised calendar for your collection day and more!</p>
      <br>
       <img alt="Calendar photo" class="calendar" src="@/assets/calendar.png" width="300" height="250" />

      <h3 class="joinus">Accessible knowledge at your’s fingertipsAccessible knowledge at your’s fingertips</h3>
      <p>Our information and resources are readily available to you.</p>
      This project is served and bundled with
      <br>
       <img alt="Phone photo" class="phone" src="@/assets/Phone.png" width="300" height="300" />
  
  </div>
  </main>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

</script>
