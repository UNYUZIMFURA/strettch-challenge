import { defineStore } from 'pinia'

export const useCreateJobModal = defineStore('create-job-modal', {
  state: () => ({
    visible: false
  }),
  actions: {
    hideModal() {
        this.visible = false
    },
    showModal() {
        this.visible = true
    },
    getModalState() {
        return this.visible
    }
  }, 
})
