import { defineStore } from 'pinia'
import type { User } from '@/types/User'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(userData: User) {
      this.user = userData
    },
    clearUser() {
      this.user = null
    },
    getUser(): User | null {
      return this.user
    },
  },
})
