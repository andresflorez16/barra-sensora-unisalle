import { create } from 'zustand'
import { onAuth, signIn, signOutUser } from '../firebase/auth'

export const useUser = create((set, get) => ({
  user: undefined,
  isUser: onAuth(set),
  setUser: async ({ email, password }) => {
    const response = await signIn({ email, password })
    if (response.code !== 200) {
      set({ user: null })
      return null
    }
    set({ user: response.user })
    return response.user
  },
  signOut: () => {
    signOutUser()
    set({ user: null })
  }
}))
