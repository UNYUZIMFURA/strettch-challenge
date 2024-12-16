<script setup lang="ts">
import JobCard from '@/components/JobCard.vue';
import Navbar from '@/components/Navbar.vue';
import { useCreateJobModal } from '@/store/createJobModalVisibility';
import { ref, computed } from 'vue';
import { createJob } from '@/composables/useJobs'; 

const createJobModal = useCreateJobModal();
const isCreateModalVisible = computed(() => createJobModal.visible);
const hideCreateJobModal = () => {
  createJobModal.hideModal();
};

const title = ref('');
const description = ref('');
const sector = ref('');
const skills = ref('');
const employmentType = ref('');
const applicationDeadline = ref('');

const submitJob = async () => {
  const jobData = {
    title: title.value,
    description: description.value,
    sector: sector.value,
    skills: skills.value.split(',').map((s) => s.trim()), 
    employmentType: employmentType.value,
    applicationDeadline: applicationDeadline.value,
  };

  const { error } = await createJob(jobData);

  if (error) {
    console.error('Error creating job:', error.message);
    alert('Failed to create job. Please try again.');
  } else {
    alert('Job created successfully!');
    hideCreateJobModal();

    title.value = '';
    description.value = '';
    sector.value = '';
    skills.value = '';
    employmentType.value = '';
    applicationDeadline.value = '';
  }
};
</script>

<template>
  <main>
    <Navbar />
    <div class="flex flex-col gap-4 px-10 py-[3rem]">
      <span class="text-lg"><span class="font-semibold">1</span> Job(s) Found</span>
      <div class="flex flex-wrap gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
  
        <div
          v-if="isCreateModalVisible"
          class="h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-20"
        >
          <div
            class="relative h-[40rem] w-[30rem] bg-white rounded-md flex flex-col gap-5 p-5"
          >
            <span class="text-[#2370CB] text-lg font-semibold">Create Job</span>
            <form @submit.prevent="submitJob" class="flex flex-col gap-4 w-full">
              <input
                v-model="title"
                type="text"
                placeholder="Job Title"
                class="border border-gray-300 p-2 rounded"
                required
              />
              <textarea
                v-model="description"
                placeholder="Job Description"
                class="border border-gray-300 p-2 rounded h-20"
                required
              ></textarea>
              <input
                v-model="sector"
                type="text"
                placeholder="Sector"
                class="border border-gray-300 p-2 rounded"
                required
              />
              <input
                v-model="skills"
                type="text"
                placeholder="Skills (comma-separated)"
                class="border border-gray-300 p-2 rounded"
                required
              />
              <select
                v-model="employmentType"
                class="border border-gray-300 p-2 rounded"
                required
              >
                <option value="" disabled>Select Employment Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
              <input
                v-model="applicationDeadline"
                type="date"
                class="border border-gray-300 p-2 rounded"
                required
              />
              <button
                type="submit"
                class="bg-[#2370CB] text-white py-2 px-4 rounded hover:bg-[#1a5ba3]"
              >
                Submit
              </button>
            </form>
            <div
              @click="hideCreateJobModal"
              class="h-8 w-8 rounded-full absolute top-4 right-6 flex items-center justify-center cursor-pointer bg-[#2370CB]"
            >
              <i class="pi pi-times" style="color: #fff"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
