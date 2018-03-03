<template>
  <div id="app">
    <nav class="navbar navbar-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> 
    </nav>

    <router-view />
  </div>
</template>

<script src="./App.js"></script>

<style src="./App.css"></style>
