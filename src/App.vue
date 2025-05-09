<script setup>
import lateralMenu from './components/lateralMenu.vue'
import search from './components/search.vue'
import tasks from './components/tasks.vue'

</script>


<template>
  <RouterView></RouterView>
<div id="lateral">
  
  <lateralMenu></lateralMenu>
</div>

<div id="main">
  <search></search>
  <tasks></tasks>
    
</div>


  

</template>

<style scoped>

#lateral {
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000; /* opcional: dar fundo */
  z-index: 1000;
}

#main {
  margin-left: 250px;
  padding: 20px;
  height: 100vh;
  overflow-y: none  ;
}


</style>


