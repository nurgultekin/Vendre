<template>
  <div id="app">
    <NavigationBar />
    <div class="container mx-auto mt-24">
      <h1 class="text-3xl font-bold mb-6 text-center">Staff List</h1>
      <StaffList />
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavBar.vue';
import StaffList from './components/StaffList.vue';


export default {
  name: 'App',
  components: {
    NavigationBar,
    StaffList,
  },
};
</script>
