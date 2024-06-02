<template>
  <div class="flex items-center p-4 border border-gray-300 rounded mb-4 shadow-lg sm:flex-row flex-col">
    <img :src="staff.avatar" alt="Profile Picture" class="w-12 h-12 rounded-full mr-4 mb-2 sm:mb-0">
    <div class="flex flex-col items-center sm:items-start">
      <h3 class="text-lg font-semibold">{{ staff.first_name }} {{ staff.last_name }}</h3>
      <a :href="'mailto:' + staff.email" class="text-blue-500 hover:underline">{{ staff.email }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    staff: Object
  }
}
</script>
