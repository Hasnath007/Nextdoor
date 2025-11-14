import React, { useEffect, useState } from 'react';
import { Upload, Plus, Check, X } from 'lucide-react';
import { Button } from '../ui/button';
import Papa from 'papaparse';

interface LeadsProps {
  user: any;
}

export function Leads({ user }: LeadsProps) {
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [newLead, setNewLead] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  // Fetch leads for the logged-in user
  const fetchLeads = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const res = await fetch(`https://my-worker.nexdoor-ai.workers.dev/leads?idd=${user.id}`);
      const json = await res.json();
      setLeads(json.data ?? []);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [user]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Qualified': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Unreachable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInterestColor = (interest: string) => {
    switch (interest) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Save new lead
  const saveNewLead = async () => {
    if (!newLead) return;
    try {
      const payload = { ...newLead, idd: user.id };
      const res = await fetch('https://my-worker.nexdoor-ai.workers.dev/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.error) {
        alert(json.error);
        return;
      }
      setNewLead(null);
      fetchLeads();
    } catch (err) {
      console.error(err);
      alert("Error saving lead");
    }
  };

  // CSV Upload
  const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !user) {
      alert('No file selected or user not logged in');
      return;
    }
    setUploading(true);
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', user.id.toString());

    try {
      const res = await fetch('https://my-worker.nexdoor-ai.workers.dev/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      console.log('Upload response:', json);

      if (json.error) {
        alert(`Upload failed: ${json.error}`);
      } else {
        setUploadedFile(json.file); // display uploaded CSV name
        fetchLeads(); // refresh leads table
        alert('CSV uploaded successfully!');
      }

    } catch (err) {
      console.error('Upload error:', err);
      alert('Upload failed!');
    } finally {
      setUploading(false);
      // Reset file input
      if (e.target) e.target.value = '';
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1>Leads Management</h1>
        <div className="flex gap-3">
          <label>
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVUpload}
              className="hidden"
            />
            <Button
              className="bg-[#336699] hover:bg-[#336699]/90 text-white gap-2"
              disabled={uploading}
            >
              <Upload className="w-4 h-4" />
              {uploading ? 'Uploading...' : 'Upload CSV'}
            </Button>
          </label>

          <Button
            className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2"
            onClick={() =>
              setNewLead({
                name: "",
                phone: "",
                status: "Pending",
                lastCall: "",
                interest: "Medium",
                notes: "",
                nextAction: "",
              })
            }
          >
            <Plus className="w-4 h-4" /> Add Lead
          </Button>
        </div>
      </div>

      {uploadedFile && (
        <div className="mt-2 text-sm text-gray-600">
          Uploaded File: <span className="font-medium">{uploadedFile}</span>
        </div>
      )}

      <div className="bg-white border border-gray-200 overflow-x-auto mt-4">
        <table className="w-full">
          <thead className="bg-[#F8FAFB]">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Last Call</th>
              <th className="px-6 py-3">Interest</th>
              <th className="px-6 py-3">Notes</th>
              <th className="px-6 py-3">Next Action</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {newLead && (
              <tr className="border-b bg-yellow-50">
                <td className="px-6 py-4">
                  <input
                    className="border p-2"
                    value={newLead.name}
                    onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="border p-2"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                  />
                </td>
                <td className="px-6 py-4">
                  <select
                    className="border p-2"
                    value={newLead.status}
                    onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
                  >
                    <option>Pending</option>
                    <option>Qualified</option>
                    <option>Unreachable</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <input
                    className="border p-2"
                    value={newLead.lastCall}
                    onChange={(e) => setNewLead({ ...newLead, lastCall: e.target.value })}
                  />
                </td>
                <td className="px-6 py-4">
                  <select
                    className="border p-2"
                    value={newLead.interest}
                    onChange={(e) => setNewLead({ ...newLead, interest: e.target.value })}
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <input
                    className="border p-2"
                    value={newLead.notes}
                    onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    className="border p-2"
                    value={newLead.nextAction}
                    onChange={(e) => setNewLead({ ...newLead, nextAction: e.target.value })}
                  />
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button className="text-green-600" onClick={saveNewLead}><Check /></button>
                  <button className="text-red-600" onClick={() => setNewLead(null)}><X /></button>
                </td>
              </tr>
            )}

            {leads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-[#F8FAFB]">
                <td className="px-6 py-4">{lead.name}</td>
                <td className="px-6 py-4">{lead.phone}</td>
                <td className="px-6 py-4">
                  <select className="border p-1 text-sm" value={lead.status} disabled>
                    <option>Pending</option>
                    <option>Qualified</option>
                    <option>Unreachable</option>
                  </select>
                </td>
                <td className="px-6 py-4">{lead.lastCall}</td>
                <td className="px-6 py-4">
                  <select className="border p-1 text-sm" value={lead.interest} disabled>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </td>
                <td className="px-6 py-4">{lead.notes}</td>
                <td className="px-6 py-4">{lead.nextAction}</td>
                <td className="px-6 py-4 text-gray-400 text-sm">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
