import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface LoginProps {
  onNavigate: (page: string) => void;
  onLoginSuccess: (user: any) => void;
}

const LOGIN_URL = 'https://my-worker.nexdoor-ai.workers.dev/login';

export function Login({ onNavigate, onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();

      if (json.success && json.user) {
        localStorage.setItem('user', JSON.stringify(json.user));
        onLoginSuccess(json.user);
        onNavigate('dashboard');
      } else {
        setMessage('Invalid email or password.');
      }
    } catch (err) {
      setMessage('Error connecting. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="mb-2">nexdoor.ai</h1>
            <p className="text-gray-600">AI Voice Agent Platform for Real Estate</p>
          </div>

          {message && <div className="mb-3 text-center text-red-600">{message}</div>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="mt-2 bg-[#F8FAFB]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
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
