import React, { useEffect, useState } from 'react';
import { Upload, Plus } from 'lucide-react';
import { Button } from '../ui/button';

export function Leads() {
  // Fetch real leads from API, not a static array
  const [leads, setLeads] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-worker.nexdoor-ai.workers.dev')
      .then(res => res.json())
      .then(json => {
        setLeads(json.data ?? []);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Qualified':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Unreachable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInterestColor = (interest) => {
    switch (interest) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1>Leads Management</h1>
        <div className="flex gap-3">
          <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white gap-2">
            <Upload className="w-4 h-4" />
            Upload CSV
          </Button>
          <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2">
            <Plus className="w-4 h-4" />
            Add Lead
          </Button>
        </div>
      </div>

      <div className="bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFB]">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Phone</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Last Call</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Interest Level</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Notes</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Next Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
                  <td className="px-6 py-4">{lead.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{lead.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-sm ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{lead.lastCall}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-sm ${getInterestColor(lead.interest)}`}>
                      {lead.interest}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{lead.notes}</td>
                  <td className="px-6 py-4 text-sm">{lead.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
