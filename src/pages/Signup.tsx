import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import { supabase } from "@/integrations/supabase/client";

const Signup = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const { submitSignup, isLoading, saveGoogleUser } = useSignup();

  useEffect(() => {
    const role = searchParams.get('role');
    if (role === 'client' || role === 'developer') {
      setSelectedRole(role);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email) {
        setEmail(user.email);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function autoSaveGoogleUser() {
      if (selectedRole && email) {
        await saveGoogleUser(selectedRole, suggestions);
      }
    }
    if (selectedRole && email) {
      autoSaveGoogleUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRole, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      return;
    }

    if (selectedRole) {
      const result = await submitSignup(email, suggestions, selectedRole);
      if (result.success) {
        setEmail("");
        setSuggestions("");
      }
    }
  };

  if (selectedRole) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32">
        <Card className="w-full max-w-md bg-white border-gray-200">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Axon Logo" 
                className="h-10 w-auto"
              />
            </div>
            <CardTitle className="text-2xl text-black">
              {selectedRole === 'developer' ? 'Developer Waiting List' : 'Client Waiting List'}
            </CardTitle>
            <p className="text-gray-600">
              {selectedRole === 'developer' 
                ? 'Get early access to build and sell AI agents' 
                : 'Get early access to find AI solutions for your business'
              }
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
{/*             <button
              type="button"
              onClick={async () => {
                await supabase.auth.signInWithOAuth({ provider: 'google' });
              }}
              className="w-full h-12 bg-red-500 text-white rounded-md mb-2 hover:bg-red-600 flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_40)"><path d="M47.5321 24.5525C47.5321 22.8644 47.389 21.1773 47.0859 19.524H24.48V28.9441H37.3436C36.8032 31.6241 35.1682 33.9641 32.8032 35.4641V41.4641H40.1682C44.1682 37.8641 47.5321 32.8644 47.5321 24.5525Z" fill="#4285F4"/><path d="M24.48 48C31.1682 48 36.8032 45.8644 40.1682 41.4641L32.8032 35.4641C30.8032 36.8644 28.1682 37.8644 24.48 37.8644C18.1682 37.8644 12.8032 33.4641 10.8032 27.8641H3.16821V34.0641C6.5321 41.4641 14.1682 48 24.48 48Z" fill="#34A853"/><path d="M10.8032 27.8641C10.1682 26.4641 9.80322 24.8644 9.80322 23.2641C9.80322 21.6641 10.1682 20.0641 10.8032 18.6641V12.4641H3.16821C1.16821 16.0641 0 20.0641 0 23.2641C0 26.4641 1.16821 30.4641 3.16821 34.0641L10.8032 27.8641Z" fill="#FBBC05"/><path d="M24.48 9.86441C28.1682 9.86441 30.8032 11.2644 32.1682 12.4641L40.1682 5.46441C36.8032 1.86441 31.1682 0 24.48 0C14.1682 0 6.5321 6.53559 3.16821 12.4641L10.8032 18.6641C12.8032 13.4641 18.1682 9.86441 24.48 9.86441Z" fill="#EA4335"/></g><defs><clipPath id="clip0_17_40"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>
              Sign up with Google
            </button> */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-4 border-2 border-black rounded-md"
              />
              <div className="space-y-2">
                <label htmlFor="suggestions" className="text-sm font-medium text-gray-700 block">
                  What would you like to see on the platform? (Optional)
                </label>
                <Textarea
                  id="suggestions"
                  placeholder="Share your ideas, feature requests, or what you're looking for..."
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                  className="min-h-[100px] resize-none border-2 border-black"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 bg-black text-white hover:bg-gray-800"
              >
                {isLoading ? "Joining..." : "Join Our Waiting List"}
              </Button>
            </form>
            <div className="text-center pt-4">
              <Link to="/" className="text-sm text-gray-600 hover:underline">
                ← Back to homepage
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32">
      <Card className="w-full max-w-md bg-white border-gray-200">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/logo.png" 
              alt="Axon Logo" 
              className="h-10 w-auto"
            />
          </div>
          <CardTitle className="text-2xl text-black">Join Our Waiting List</CardTitle>
          <p className="text-gray-600">
            Choose how you'd like to get started
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full h-12 bg-black text-white hover:bg-gray-800"
            onClick={() => setSelectedRole('developer')}
          >
            I'm a Developer
          </Button>
          <Button 
            variant="outline" 
            className="w-full h-12 border-2 border-gray-300 text-black hover:bg-gray-50"
            onClick={() => setSelectedRole('client')}
          >
            I'm a Client
          </Button>
          <div className="text-center pt-4">
            <Link to="/" className="text-sm text-gray-600 hover:underline">
              ← Back to homepage
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
