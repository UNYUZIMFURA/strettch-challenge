import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import type { User } from '@/types/User'; 

export const useAuth = () => {
  const user = ref<User | null>(null);
  const router = useRouter();
  const authStore = useAuthStore();

  const login = async (username: string, password: string): Promise<void> => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error) {
      console.error('Login failed:', error);
    } else { 
      authStore.setUser(data as User);
      await router.push('/');
    }
  };

  return { user, login };
};
