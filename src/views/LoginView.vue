<template>
  <div class="login">
    <h1>Sign in</h1>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Login</button>
    <p> Don't have an account? You can <router-link to="/register">create one.</router-link></p>
  </div>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
name: 'login',
data() {
    return{
    email:'',
    password:'',
  
    };
},
methods: {
    login: function(){
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     console.log('Successfully logged in:', userCredential.user);
     this.$router.replace('landingpage')
  })
  .catch((error) => {
        // Error occurred during registration
        this.error = error.message;
        console.error('Registration error:', error);
  });
    }
}

}
</script>



<style>
@media (max-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
  .login{
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }

}
</style>
