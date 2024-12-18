<script setup lang="ts">
import { defineProps } from 'vue'
import type { Job } from '@/types/Job'
import { formatDate } from '@/utils/formatDate'

defineProps<{
  job: Job
}>()
</script>
<template>
  <div class="w-full max-w-[767px] md:w-[25rem] border border-[#2370CB] cursor-pointer flex flex-col gap-4 p-4 rounded-md">
    <div class="flex justify-between items-start">
      <div class="flex gap-2 items-center">
        <div
          class="h-[4rem] w-[4rem] border-4 border-[#2370CB] overflow-hidden rounded-full cursor-pointer"
        >
          <img src="@/assets/images/rp.jpeg" class="h-full rounded-md object-contain" />
        </div>
        <div class="flex flex-col gap-1">
          <span>{{ job.title }}</span>
          <span class="text-xs text-nowrap">Rwanda Polytechnic</span>
        </div>
      </div>

      <div
        class="py-2 px-4 cursor-pointer border bg-[#10A969] rounded-full flex items-center justify-center"
      >
        <span class="text-white text-xs">Open</span>
      </div>
    </div>
    <p class="text-sm text-[#676b74]">
      {{ job.description }}
    </p>
    <div class="flex items-center gap-2">
      <div
        v-for="skill in job.skills.split(',')"
        :key="skill.trim()"
        class="text-xs bg-[#2370CB] text-white px-2 py-[8px] rounded-full"
      >
        {{ skill.trim() }}
      </div>
    </div>
    <div class="flex justify-between items-end mt-4">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-[#676b74]"
          >Posted at: {{ formatDate(new Date(job.created_at)) }}</span
        >
        <span class="text-sm text-[#676b74]">Deadline: {{ job.application_deadline }}</span>
        <span class="text-sm text-[#676b74]">Sector: {{ job.sector }}</span>
        <span class="text-sm text-[#676b74]">Employment Type: {{ job.employment_type }}</span>
      </div>
      <button class="text-sm bg-[#2370CB] h-[3rem] w-[10rem] rounded-full text-white">Apply</button>
    </div>
  </div>
</template>
