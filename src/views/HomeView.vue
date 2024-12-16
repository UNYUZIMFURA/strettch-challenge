<script setup lang="ts">
import JobCard from '@/components/JobCard.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <main>
    <Navbar />
    <div class="flex flex-col gap-4 p-4">
      <span class="text-lg"><span class="font-semibold">20</span> Jobs Found</span>
      <div class="flex flex-wrap gap-4">
        <JobCard />
        <!-- <JobCard />
        <JobCard /> -->
      </div>
    </div>
  </main>
</template>
