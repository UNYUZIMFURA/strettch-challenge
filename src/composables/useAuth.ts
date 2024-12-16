import { ref } from 'vue';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'vue-router';

export const useAuth = () => {
  const user = ref(null);
  const router = useRouter();

  const login = async (username:string , password: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error) {
      console.error('Login failed:', error);
    } else {
      console.log(data)
      
    }
  };

  return { user, login };
};