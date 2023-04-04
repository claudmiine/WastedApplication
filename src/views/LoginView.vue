<template>
  <div class="login">
    <h1>Sign in</h1>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button>Login</button>
    <p> Don't have an account? You can <router-link to="/register">create one.</router-link></p>
  </div>
</template>

<script>
export default {
name: 'login',
data() {
    return{};
},
methods: {}

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
