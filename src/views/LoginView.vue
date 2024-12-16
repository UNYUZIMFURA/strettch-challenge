<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'

const validationSchema = toTypedSchema(
  zod.object({
    username: zod.string().min(1, { message: 'This is required' }),
    password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
  }),
)

const loading = ref(false)
const { login } = useAuth()

async function onSubmit(values) {
  loading.value = true
  const { username, password } = values
  try {
    await login(username, password);
  } catch (error) {
    alert('Login failed:', error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="h-screen w-full relative">
    <img src="@/assets/images/main_bg.jpg" class="h-full w-full object-cover brightness-50" />
    <div
      class="w-[95%] max-w-[27rem] px-10 py-6 flex flex-col gap-14 items-center rounded-md bg-white absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2"
    >
      <img src="@/assets/images/rp.jpeg" class="h-14 w-[8rem] cursor-pointer" />
      <Form
        :validation-schema="validationSchema"
        @submit="onSubmit"
        class="flex flex-col gap-8 text-sm text-[#676b74] w-full"
      >
        <div class="flex flex-col gap-3">
          <label for="username">Username:</label>
          <Field
            name="username"
            type="text"
            class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
          />
          <ErrorMessage name="username" class="text-[#D80000]" />
        </div>
        <div class="flex flex-col gap-3">
          <label for="password">Password:</label>
          <Field
            name="password"
            type="password"
            class="h-[3rem] border border-[#d7dbe1] rounded-[4px] outline-none indent-3"
          />
          <ErrorMessage name="password" class="text-[#D80000]" />
        </div>
        <button
          :disabled="loading"
          class="bg-[#2370CB] h-[3.2rem] text-white rounded-[4px] mt-2 flex items-center justify-center"
        >
          <span v-if="loading">Logging In...</span>
          <span v-else>Submit</span>
        </button>

      </Form>
    </div>
  </div>
</template>
