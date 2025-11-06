import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

export function Appointments() {
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

  const renderTable = (appointments: any[]) => (
    <table className="w-full">
      <thead className="bg-[#F8FAFB]">
        <tr>
          <th className="px-6 py-3 text-left text-sm text-gray-600">Lead</th>
          <th className="px-6 py-3 text-left text-sm text-gray-600">Date</th>
          <th className="px-6 py-3 text-left text-sm text-gray-600">Time</th>
          <th className="px-6 py-3 text-left text-sm text-gray-600">Assigned Agent</th>
          <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appt) => (
          <tr key={appt.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
            <td className="px-6 py-4">{appt.lead}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{appt.date}</td>
            <td className="px-6 py-4 text-sm text-gray-600">{appt.time}</td>
            <td className="px-6 py-4 text-sm">{appt.agent}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-1 text-sm ${getStatusColor(appt.status)}`}>
                {appt.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Appointments</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="border-b border-gray-200">
                <TabsList className="w-full justify-start bg-transparent p-0 h-auto">
                  <TabsTrigger 
                    value="upcoming" 
                    className="data-[state=active]:bg-[#1E7A7A] data-[state=active]:text-white px-6 py-3"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger 
                    value="completed"
                    className="data-[state=active]:bg-[#1E7A7A] data-[state=active]:text-white px-6 py-3"
                  >
                    Completed
                  </TabsTrigger>
                  <TabsTrigger 
                    value="canceled"
                    className="data-[state=active]:bg-[#1E7A7A] data-[state=active]:text-white px-6 py-3"
                  >
                    Canceled
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming" className="m-0">
                <div className="overflow-x-auto">
                  {renderTable(upcomingAppointments)}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="m-0">
                <div className="overflow-x-auto">
                  {renderTable(completedAppointments)}
                </div>
              </TabsContent>

              <TabsContent value="canceled" className="m-0">
                <div className="overflow-x-auto">
                  {renderTable(canceledAppointments)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Panel - Stats */}
        <div className="bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3>Appointments This Week</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Scheduled</div>
                <div className="text-3xl font-bold text-[#2B2B2B]">18</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Confirmed</div>
                <div className="text-3xl font-bold text-green-600">15</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Pending</div>
                <div className="text-3xl font-bold text-yellow-600">3</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
                <div className="text-3xl font-bold text-[#1E7A7A]">92%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
