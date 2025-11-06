import React from 'react';
import { Phone, Users, Calendar, TrendingUp, Upload, Clock, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

export function Dashboard() {
  const kpis = [
    { label: 'Active Calls Today', value: '47', icon: Phone, change: '+12%' },
    { label: 'Leads Contacted', value: '234', icon: Users, change: '+8%' },
    { label: 'Appointments Booked', value: '18', icon: Calendar, change: '+15%' },
    { label: 'Conversion Rate', value: '7.7%', icon: TrendingUp, change: '+2.3%' },
  ];

  const callActivity = [
    { id: 1, leadName: 'Sarah Mitchell', phone: '(555) 123-4567', time: '10:34 AM', duration: '4:23', outcome: 'Appointment Set', interest: 'High' },
    { id: 2, leadName: 'John Peterson', phone: '(555) 234-5678', time: '10:18 AM', duration: '2:15', outcome: 'Callback Requested', interest: 'Medium' },
    { id: 3, leadName: 'Emma Rodriguez', phone: '(555) 345-6789', time: '10:05 AM', duration: '6:42', outcome: 'Qualified Lead', interest: 'High' },
    { id: 4, leadName: 'Michael Chen', phone: '(555) 456-7890', time: '9:47 AM', duration: '1:58', outcome: 'No Answer', interest: 'Low' },
    { id: 5, leadName: 'Lisa Anderson', phone: '(555) 567-8901', time: '9:23 AM', duration: '5:12', outcome: 'Appointment Set', interest: 'High' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#1E7A7A]/10">
                  <Icon className="w-6 h-6 text-[#1E7A7A]" />
                </div>
                <span className="text-sm text-green-600">{kpi.change}</span>
              </div>
              <div className="text-3xl font-bold text-[#2B2B2B] mb-1">{kpi.value}</div>
              <div className="text-sm text-gray-600">{kpi.label}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 border border-gray-200 mb-6">
        <h3 className="mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2">
            <Upload className="w-4 h-4" />
            Upload Leads
          </Button>
          <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white gap-2">
            <Clock className="w-4 h-4" />
            Schedule Follow-Up
          </Button>
          <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white gap-2">
            <Eye className="w-4 h-4" />
            View Appointments
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Call Activity Feed */}
        <div className="lg:col-span-2 bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3>Call Activity Feed</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAFB]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Lead Name</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Phone</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Time</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Duration</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Outcome</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Interest</th>
                </tr>
              </thead>
              <tbody>
                {callActivity.map((call) => (
                  <tr key={call.id} className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm">{call.leadName}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{call.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{call.time}</td>
                    <td className="px-6 py-4 text-sm">{call.duration}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 ${
                        call.outcome === 'Appointment Set' ? 'bg-green-100 text-green-800' :
                        call.outcome === 'Qualified Lead' ? 'bg-blue-100 text-blue-800' :
                        call.outcome === 'Callback Requested' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {call.outcome}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-2 py-1 ${
                        call.interest === 'High' ? 'bg-green-100 text-green-800' :
                        call.interest === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {call.interest}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel - Subscription Summary */}
        <div className="bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3>Subscription Plan</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <div className="text-2xl font-bold text-[#2B2B2B] mb-1">Pro Plan</div>
              <div className="text-sm text-gray-600">$199/month</div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Next Renewal</span>
                <span className="text-sm">Dec 1, 2025</span>
              </div>
              <div className="text-sm text-gray-500">Auto-renew enabled</div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Call Usage</span>
                <span className="text-sm">847 / 1000</span>
              </div>
              <Progress value={84.7} className="h-2 bg-gray-200" />
              <div className="text-xs text-amber-600 mt-2">⚠️ 85% of calls used</div>
            </div>

            <Button className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white mt-4">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
