<script setup>
import lateralMenu from './components/lateralMenu.vue'
import search from './components/search.vue'
import tasks from './components/tasks.vue'
import createTask from './components/modalCreateTask.vue'


</script>


<template>
<div id="lateral">
  <lateralMenu></lateralMenu>
</div>

<div id="main">
  <search></search>
  <tasks></tasks>
  <createTask></createTask>
  
</div>


</template>

<style scoped>

#lateral{
  position: absolute;
}


#main{
margin-left: 250px;
}

</style>
