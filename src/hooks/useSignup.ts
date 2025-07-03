import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitSignup = async (email: string, suggestions: string, role: string) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('signups')
        .insert([
          {
            email,
            suggestions: suggestions || null,
            role,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      // Fire event if client
      if (role === 'client') {
        window.dispatchEvent(new Event('client-signup'));
      }

      toast({
        title: "Registration Successful!",
        description: "You've been added to our waiting list. We will contact you as soon as possible!",
        variant: "success",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting signup:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  // دالة جديدة: حفظ مستخدم جوجل في جدول signups
  const saveGoogleUser = async (role: string, suggestions: string = "") => {
    setIsLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !user.email) {
        throw new Error("No Google user found");
      }
      // تحقق إذا كان الإيميل مسجل بالفعل
      const { data: existing } = await supabase
        .from('signups')
        .select('id')
        .eq('email', user.email)
        .maybeSingle();
      if (!existing) {
        const { error } = await supabase
          .from('signups')
          .insert([
            {
              email: user.email,
              suggestions: suggestions || null,
              role,
              created_at: new Date().toISOString()
            }
          ]);
        if (error) throw error;
      }
      toast({
        title: "Registration Successful!",
        description: "You've been added to our waiting list. We will contact you as soon as possible!",
        variant: "success",
      });
      return { success: true };
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitSignup, isLoading, saveGoogleUser };
};
