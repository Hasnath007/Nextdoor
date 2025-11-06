import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface LoginProps {
  onNavigate: (page: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="mb-2">nexdoor.ai</h1>
            <p className="text-gray-600">AI Voice Agent Platform for Real Estate</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                className="mt-2 bg-[#F8FAFB]"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="mt-2 bg-[#F8FAFB]"
                required
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white"
            >
              Log In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('register')}
              className="text-sm text-[#1E7A7A] hover:underline"
            >
              Don't have an account? Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
