<template>
  <div class="login">
    <h1>This is a Landing page!!</h1>
    <button @click="logout">Log out</button>
  </div>
</template>


<script>
import { getAuth, signOut } from "firebase/auth";


export default {
name: 'logout',
data() {
    return{
  
    };
},
    methods: {
    logout: function (){
      const auth = getAuth();
    signOut(auth).then(() => {

   this.$router.replace('/');
    
    })
    .catch((error) => {
  // An error happened.
      this.error = error.message;
      console.error('Logout error:', error);
});
    }
    
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
