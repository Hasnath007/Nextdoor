import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface RegisterProps {
  onNavigate: (page: string) => void;
}

export function Register({ onNavigate }: RegisterProps) {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('onboarding');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="mb-2">Create Account</h1>
            <p className="text-gray-600">Get started with nexdoor.ai</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Doe"
                className="mt-2 bg-[#F8FAFB]"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="mt-2 bg-[#F8FAFB]"
                required
              />
            </div>

            <div>
              <Label htmlFor="region">Region</Label>
              <Select defaultValue="northeast">
                <SelectTrigger id="region" className="mt-2 bg-[#F8FAFB]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
           <SelectItem value="alberta">Alberta</SelectItem>
<SelectItem value="alberta">Alberta</SelectItem>
<SelectItem value="british-columbia">British Columbia</SelectItem>
<SelectItem value="manitoba">Manitoba</SelectItem>
<SelectItem value="new-brunswick">New Brunswick</SelectItem>
<SelectItem value="newfoundland-labrador">Newfoundland and Labrador</SelectItem>
<SelectItem value="nova-scotia">Nova Scotia</SelectItem>
<SelectItem value="ontario">Ontario</SelectItem>
<SelectItem value="prince-edward-island">Prince Edward Island</SelectItem>
<SelectItem value="quebec">Quebec</SelectItem>
<SelectItem value="saskatchewan">Saskatchewan</SelectItem>


                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit"
              className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('login')}
              className="text-sm text-[#1E7A7A] hover:underline"
            >
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
