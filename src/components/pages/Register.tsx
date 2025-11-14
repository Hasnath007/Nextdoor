import React, { useState } from 'react';
// ...your imports

export function Register({ onNavigate }: RegisterProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    region: 'alberta'
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleRegion = (value: string) => {
    setForm(f => ({ ...f, region: value }));
  };

  // STEP 2: Workers endpoint for registration
  const WORKER_URL = "https://my-worker.nexdoor-ai.workers.dev/register";

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      });
      const json = await res.json();
      if (json.error === "EMAIL_EXISTS") {
        setMessage("Email already exists. Try another or login.");
      } else if (json.success) {
        setMessage("Registered successfully!");
        setTimeout(() => onNavigate('onboarding'), 1200);
      } else {
        setMessage("Registration failed. Try again.");
      }
    } catch (err) {
      setMessage("Error connecting. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // -- Render as usual --
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="mb-2">Create Account</h1>
            <p className="text-gray-600">Get started with nexdoor.ai</p>
          </div>
          {message && <div className="mb-3 text-center text-red-600">{message}</div>}
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" className="mt-2 bg-[#F8FAFB]" required value={form.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" className="mt-2 bg-[#F8FAFB]" required value={form.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" className="mt-2 bg-[#F8FAFB]" required value={form.password} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="region">Region</Label>
              <Select defaultValue="alberta" onValueChange={handleRegion}>
                <SelectTrigger id="region" className="mt-2 bg-[#F8FAFB]"><SelectValue /></SelectTrigger>
                <SelectContent>
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
            <Button type="submit" className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white" disabled={loading}>{loading ? "Registering..." : "Create Account"}</Button>
          </form>
          <div className="mt-6 text-center">
            <button onClick={() => onNavigate('login')} className="text-sm text-[#1E7A7A] hover:underline">Already have an account? Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
