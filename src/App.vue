<template>
  <the-navigation></the-navigation>
  
  <router-view v-slot="slotProps">
  <transition name="view" >
    <component :is="slotProps.Component"></component>
  </transition>
  </router-view>
 
  
  
</template>

<script>
  import TheNavigation from './components/TheNavigation.vue';
 

  export default {
    
    data(){
      return{
        
      }
    },
    components: {
      TheNavigation,
      
      
    },


}

</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.view-enter-active,
.view-leave-active{
  transition: opacity 0.5s ease-in-out, transform 0.5s ease; 
}


.view-enter-from,
.view-leave-to{
  opacity:0;
  transform: translateY(-100px);
}
.view-enter-to,
.view-leave-from{
  opacity:1;
  transform: translateY(0);
}


</style>