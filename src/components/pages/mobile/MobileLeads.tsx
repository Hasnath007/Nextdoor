import React from 'react';
import { Upload, Plus, Menu, Phone } from 'lucide-react';
import { Button } from '../../ui/button';

export function MobileLeads() {
  const leads = [
    { id: 1, name: 'Sarah Mitchell', phone: '(555) 123-4567', status: 'Qualified', lastCall: '2 hours ago', interest: 'High', nextAction: 'Send listings' },
    { id: 2, name: 'John Peterson', phone: '(555) 234-5678', status: 'Pending', lastCall: '1 day ago', interest: 'Medium', nextAction: 'Schedule showing' },
    { id: 3, name: 'Emma Rodriguez', phone: '(555) 345-6789', status: 'Qualified', lastCall: '3 hours ago', interest: 'High', nextAction: 'Market analysis' },
    { id: 4, name: 'Michael Chen', phone: '(555) 456-7890', status: 'Unreachable', lastCall: '5 days ago', interest: 'Low', nextAction: 'Try email' },
    { id: 5, name: 'Lisa Anderson', phone: '(555) 567-8901', status: 'Qualified', lastCall: '4 hours ago', interest: 'High', nextAction: 'Send ROI report' },
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
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* Mobile Header */}
      <div className="bg-[#2B2B2B] p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-white">
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-white font-bold text-lg">nexdoor.ai</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2>Leads</h2>
          <div className="flex gap-2">
            <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white p-2">
              <Upload className="w-4 h-4" />
            </Button>
            <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white p-2">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Leads as Collapsible Cards */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="bg-white border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-bold mb-1">{lead.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    {lead.phone}
                  </div>
                </div>
                <button className="text-[#1E7A7A]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <span className={`px-2 py-1 text-xs ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Interest</div>
                  <span className={`px-2 py-1 text-xs ${getInterestColor(lead.interest)}`}>
                    {lead.interest}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Last Call</div>
                  <div>{lead.lastCall}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Next Action</div>
                  <div>{lead.nextAction}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
