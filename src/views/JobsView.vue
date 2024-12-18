<script setup lang="ts">
import * as zod from 'zod'
import JobCard from '@/components/JobCard.vue'
import Navbar from '@/components/Navbar.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useCreateJobModal } from '@/store/createJobModal'
import { ref, computed, onMounted } from 'vue'
import { createJob, getJobs } from '@/composables/useJobs'
import type { Job } from '@/types/Job'

const createJobModal = useCreateJobModal()
const isCreateModalVisible = computed(() => createJobModal.visible)

const hideCreateJobModal = () => {
  createJobModal.hideModal()
}

const jobs = ref<Job[] | null>(null)
const loading = ref(false)
const validationSchema = toTypedSchema(
  zod.object({
    title: zod.string().min(1, { message: 'Title is too short' }),
    description: zod.string().min(8, { message: 'Description is too short' }),
    sector: zod.string().min(5, { message: 'Sector name too short' }),
    skills: zod.string().min(1, { message: 'Enter skills' }),
    employment_type: zod.string().min(1, { message: 'Select employment type' }),
    application_deadline: zod
      .string()
      .min(1, { message: 'Application deadline is required' })
      .refine((val) => new Date(val) > new Date(), {
        message: 'Application deadline must be a future date',
      })
      .transform((val) => new Date(val)),
  }),
)

async function onSubmit(values) {
  try {
    const data = await createJob(values)
    console.log(data)
  } catch (err: any) {
    console.log(err.message)
  }
}

async function getFetchJobs() {
  try {
    const data = await getJobs()
    jobs.value = data.data || []
    console.log(data)
  } catch (err: any) {
    console.log(err.message)
  }
}

onMounted(() => {
  getFetchJobs()
})
</script>

<template>
  <main class="w-full">
    <Navbar />
    <div class="w-full gap-4 px-4 md:px-10 py-[3rem]">
      <span class="text-lg"
        ><span class="font-semibold">{{ jobs?.length || 'loading' }}</span> Job(s) Found</span
      >
      <div class="w-full flex flex-wrap h-[20rem] gap-4">
        <JobCard v-for="job in jobs" :job="job" />
        <div
          v-if="isCreateModalVisible"
          class="h-screen w-screen flex items-center justify-center bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-20"
        >
          <div class="relative w-[30rem] bg-white rounded-md flex flex-col gap-5 p-5">
            <span class="text-[#2370CB] text-lg font-semibold">Create Job</span>
            <Form
              :validation-schema="validationSchema"
              @submit="onSubmit"
              class="flex flex-col gap-4 w-full"
            >
              <div class="flex flex-col gap-3">
                <label for="title">Job Title:</label>
                <Field
                  name="title"
                  type="text"
                  class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                />
                <ErrorMessage name="title" class="text-[#D80000]" />
              </div>
              <div class="flex flex-col gap-3">
                <label for="description">Job Description:</label>
                <Field
                  name="description"
                  as="textarea"
                  class="h-[5rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                />
                <ErrorMessage name="description" class="text-[#D80000]" />
              </div>
              <div class="flex flex-col gap-3">
                <label for="sector">Sector:</label>
                <Field
                  name="sector"
                  type="text"
                  class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                />
                <ErrorMessage name="sector" class="text-[#D80000]" />
              </div>
              <div class="flex flex-col gap-3">
                <label for="skills">Skills (comma-separated):</label>
                <Field
                  name="skills"
                  type="text"
                  class="h-[3rem] w-[] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                />
                <ErrorMessage name="skills" class="text-[#D80000]" />
              </div>
              <div class="flex flex-col gap-3">
                <label for="employment_type">Employment Type:</label>
                <Field
                  name="employment_type"
                  as="select"
                  class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                >
                  <option value="" disabled>Select Employment Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </Field>
                <ErrorMessage name="employment_type" class="text-[#D80000]" />
              </div>
              <div class="flex flex-col gap-3">
                <label for="application_deadline">Application Deadline:</label>
                <Field
                  name="application_deadline"
                  type="date"
                  class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
                />
                <ErrorMessage name="application_deadline" class="text-[#D80000]" />
              </div>
              <button
                class="bg-[#2370CB] h-[3.2rem] text-white rounded-[4px] mt-2 flex items-center justify-center"
              >
                <span v-if="loading">Submitting...</span>
                <span v-else>Submit</span>
              </button>
            </Form>
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
