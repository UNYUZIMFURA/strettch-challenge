<script setup lang="ts">
import { useAuthStore } from '@/store/authStore'
  const authStore = useAuthStore()
  const user = authStore.getUser()
</script>

<template>
  <nav class="flex items-center justify-between p-4 text-[#676b74] text-sm">
    <img src="@/assets/images/rp.jpeg" class="h-12 w-[7.5rem] cursor-pointer" />
    <div class="flex items-center gap-10">
    <span class="text-[#2370CB] cursor-pointer">Jobs</span>
    <span class="cursor-pointer">Info</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="h-[2.5rem] w-[2.5rem] rounded-full overflow-hidden cursor-pointer">
        <img src="@/assets/images/businessman.jpeg" class="h-full w-full object-cover" />
      </div>
      <div class="flex flex-col">
        <span>{{ user?.username }}</span>
        <span class="text-xs">{{ user?.user_type }}</span>
      </div>
    </div>
  </nav>
</template>
