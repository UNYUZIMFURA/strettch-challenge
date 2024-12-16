import { supabase } from '@/lib/supabase';

export const createJob = async (jobData: {
  title: string;
  description: string;
  sector: string;
  skills: string[];
  employment_type: string;
  application_deadline: string;
}) => {
  const { data, error } = await supabase
    .from('jobs')
    .insert([jobData]);

  return { data, error };
};
