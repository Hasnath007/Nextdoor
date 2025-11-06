import React, { useState } from 'react';
import { Menu, Calendar, Clock } from 'lucide-react';

export function MobileAppointments() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingAppointments = [
    { id: 1, lead: 'Sarah Mitchell', date: 'Nov 2, 2025', time: '2:00 PM', agent: 'AI Agent 1', status: 'Confirmed' },
    { id: 2, lead: 'Lisa Anderson', date: 'Nov 3, 2025', time: '10:00 AM', agent: 'AI Agent 2', status: 'Confirmed' },
    { id: 3, lead: 'Jennifer Taylor', date: 'Nov 4, 2025', time: '3:30 PM', agent: 'AI Agent 1', status: 'Pending' },
    { id: 4, lead: 'David Kim', date: 'Nov 5, 2025', time: '1:00 PM', agent: 'AI Agent 2', status: 'Confirmed' },
  ];

  const completedAppointments = [
    { id: 5, lead: 'Emma Rodriguez', date: 'Oct 30, 2025', time: '11:00 AM', agent: 'AI Agent 1', status: 'Completed' },
    { id: 6, lead: 'John Peterson', date: 'Oct 29, 2025', time: '2:30 PM', agent: 'AI Agent 2', status: 'Completed' },
  ];

  const canceledAppointments = [
    { id: 7, lead: 'Robert Johnson', date: 'Oct 28, 2025', time: '4:00 PM', agent: 'AI Agent 1', status: 'Canceled' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const appointments = 
    activeTab === 'upcoming' ? upcomingAppointments :
    activeTab === 'completed' ? completedAppointments :
    canceledAppointments;

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
        <h2 className="mb-4">Appointments</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">This Week</div>
            <div className="text-2xl font-bold text-[#2B2B2B]">18</div>
          </div>
          <div className="bg-white p-4 border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
            <div className="text-2xl font-bold text-[#1E7A7A]">92%</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-gray-200 mb-4">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-3 text-sm transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-[#1E7A7A] text-white'
                  : 'hover:bg-[#F8FAFB]'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex-1 py-3 text-sm transition-colors ${
                activeTab === 'completed'
                  ? 'bg-[#1E7A7A] text-white'
                  : 'hover:bg-[#F8FAFB]'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab('canceled')}
              className={`flex-1 py-3 text-sm transition-colors ${
                activeTab === 'canceled'
                  ? 'bg-[#1E7A7A] text-white'
                  : 'hover:bg-[#F8FAFB]'
              }`}
            >
              Canceled
            </button>
          </div>
        </div>

        {/* Appointments as Cards */}
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="bg-white border border-gray-200 p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="font-bold">{appt.lead}</div>
                <span className={`px-2 py-1 text-xs ${getStatusColor(appt.status)}`}>
                  {appt.status}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {appt.date}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {appt.time}
                </div>
                <div className="text-gray-600">
                  Agent: {appt.agent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
