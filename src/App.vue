<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aufgabe1">Aufgabe 1</RouterLink>
      <RouterLink to="/aufgabe2">Aufgabe 2</RouterLink>
      <RouterLink to="/aufgabe3">Aufgabe 3</RouterLink>
      <RouterLink to="/aufgabe4">Aufgabe 4</RouterLink>
      <RouterLink to="/aufgabe5">Aufgabe 5</RouterLink>
      <RouterLink to="/aufgabe6">Aufgabe 6</RouterLink>
      <RouterLink to="/aufgabe7">Aufgabe 7</RouterLink>
      <RouterLink to="/aufgabe8">Aufgabe 8</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  background-color: aqua;
}

nav a {
  display: block;
  color: black;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5rem;
}
nav a:hover {
  color: green;
}
</style>
