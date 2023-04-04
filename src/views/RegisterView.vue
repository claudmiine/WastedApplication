<template>
  <div class="register">
    <h1>Sign up</h1>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button>Sign up!</button>
    <span> Go back to <router-link to="/login">login.</router-link></span>
  </div>
</template>

<script>

export default{
name: 'register',
data() {
return{}
},
methods: {}
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