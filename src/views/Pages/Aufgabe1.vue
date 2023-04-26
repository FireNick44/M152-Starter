<template>
  Aufgabe 1

  <h1>Color Switcher</h1>
  <button :class=" colorClass + ' ' + backgroundClass"> {{ colorClass }} auf {{ backgroundClass }}</button>

  <h2>color</h2>
  <ul>
    <li @click="colorClass = 'c-black'">black</li>
    <li @click="colorClass = 'c-white'">white</li>
    <li @click="colorClass = 'c-red'">red</li>
    <li @click="colorClass = 'c-violet'">violet</li>
  </ul>

  <h2>background</h2>
  <ul>
    <li @click="backgroundClass = 'b-black'">black</li>
    <li @click="backgroundClass = 'b-white'">white</li>
    <li @click="backgroundClass = 'b-red'">red</li>
    <li @click="backgroundClass = 'b-violet'">violet</li>
  </ul>

</template>
 
<script setup>

import { ref } from 'vue'

const colorClass = ref('color')
const backgroundClass = ref('background')

</script>
 
<style >
  .c-black{
    color: black;
  }
  .c-white{
    color: white;
  }
  .c-red{
    color: rgb(197, 29, 29);
  }
  .c-violet{
    color: blueviolet;
  }

  .b-black{
    background-color: black;
  }
  .b-white{
    background-color: white;
  }
  .b-red{
    background-color: rgb(197, 29, 29);
  }
  .b-violet{
    background-color: blueviolet;
  }

  button{
    padding: 20px;
    border: none;
  }
</style>