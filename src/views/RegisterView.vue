<template>
  <div class="register">
    <h1>Sign up</h1>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <p> Email is: {{ email }}</p>
    <p> Password is: {{ password }}</p>
    <button @click="register">Sign up!</button>
    <span> Go back to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default{
name: 'register',
data() {
return {
    email:"",
    password:"",
    }
},
methods: {
register(){

const auth = getAuth();
createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // console.log("Dzialam")
    // const user = userCredential.user;
    console.log('Successfully registered!!!!!!!!!!!!:', userCredential.user);
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

<style scoped>
.register {
margin-top: 40px;
}
input{
margin: 10px 0;
padding: 15px;
}
button {
margin-top: 10px;
cursor: pointer;
}
span{
display: block;
margin-top: 20px;
font-size: 11px;
}
</style>