import React from 'react';
import { Upload, Plus } from 'lucide-react';
import { Button } from '../ui/button';

export function Leads() {
  const leads = [
    { id: 1, name: 'Sarah Mitchell', phone: '(555) 123-4567', status: 'Qualified', lastCall: '2 hours ago', interest: 'High', notes: 'Looking for 3BR in downtown', nextAction: 'Send listings' },
    { id: 2, name: 'John Peterson', phone: '(555) 234-5678', status: 'Pending', lastCall: '1 day ago', interest: 'Medium', notes: 'First-time buyer, pre-approved', nextAction: 'Schedule showing' },
    { id: 3, name: 'Emma Rodriguez', phone: '(555) 345-6789', status: 'Qualified', lastCall: '3 hours ago', interest: 'High', notes: 'Ready to sell current home', nextAction: 'Market analysis' },
    { id: 4, name: 'Michael Chen', phone: '(555) 456-7890', status: 'Unreachable', lastCall: '5 days ago', interest: 'Low', notes: 'No answer, left 3 voicemails', nextAction: 'Try email' },
    { id: 5, name: 'Lisa Anderson', phone: '(555) 567-8901', status: 'Qualified', lastCall: '4 hours ago', interest: 'High', notes: 'Investment property seeker', nextAction: 'Send ROI report' },
    { id: 6, name: 'David Kim', phone: '(555) 678-9012', status: 'Pending', lastCall: '2 days ago', interest: 'Medium', notes: 'Relocating from NYC', nextAction: 'Area overview call' },
    { id: 7, name: 'Jennifer Taylor', phone: '(555) 789-0123', status: 'Qualified', lastCall: '1 hour ago', interest: 'High', notes: 'Luxury market, $2M+ budget', nextAction: 'Private showing' },
    { id: 8, name: 'Robert Johnson', phone: '(555) 890-1234', status: 'Pending', lastCall: '3 days ago', interest: 'Medium', notes: 'Wants new construction', nextAction: 'Builder intro' },
  ];

  const getStatusColor = (status: string) => {
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

  const getInterestColor = (interest: string) => {
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
