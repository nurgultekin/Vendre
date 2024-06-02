<template>
    <nav class="fixed top-0 left-0 right-0 flex items-center justify-between p-10 bg-transparent z-50">
      
      <div>
        <a href="https://vendre.io" class="text-2xl font-bold">Vendre</a>
      </div>
  
      <!-- Navigation Links -->
      <div class="flex space-x-10">
        <a href="#product" class="text-lg">Product</a>
        <a href="#partners" class="text-lg">Partners</a>
        <a href="#pricing" class="text-lg">Pricing</a>
        <a href="#references" class="text-lg">References</a>
      </div>
  
      <!-- Globe (language) icon and CTA Button -->
      <div class="flex items-center space-x-4">
        <button class="text-lg"><i class="fas fa-globe"></i></button>
        <button class="px-4 py-2 bg-black text-white rounded-lg">Try it</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationBar',
  };
  </script>
  
  <style scoped>
  nav {
    padding: 40px;
  }
  </style>
  