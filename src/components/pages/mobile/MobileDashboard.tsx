import React from 'react';
import { Phone, Users, Calendar, TrendingUp, Upload, Clock, Eye, Menu } from 'lucide-react';
import { Button } from '../../ui/button';
import { Progress } from '../../ui/progress';

export function MobileDashboard() {
  const kpis = [
    { label: 'Active Calls Today', value: '47', icon: Phone, change: '+12%' },
    { label: 'Leads Contacted', value: '234', icon: Users, change: '+8%' },
    { label: 'Appointments Booked', value: '18', icon: Calendar, change: '+15%' },
    { label: 'Conversion Rate', value: '7.7%', icon: TrendingUp, change: '+2.3%' },
  ];

  const recentCalls = [
    { id: 1, leadName: 'Sarah Mitchell', time: '10:34 AM', outcome: 'Appointment Set', interest: 'High' },
    { id: 2, leadName: 'John Peterson', time: '10:18 AM', outcome: 'Callback Requested', interest: 'Medium' },
    { id: 3, leadName: 'Emma Rodriguez', time: '10:05 AM', outcome: 'Qualified Lead', interest: 'High' },
  ];

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
        <h2 className="mb-4">Dashboard</h2>

        {/* KPI Cards - Stacked */}
        <div className="space-y-4 mb-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-[#1E7A7A]/10">
                    <Icon className="w-5 h-5 text-[#1E7A7A]" />
                  </div>
                  <span className="text-sm text-green-600">{kpi.change}</span>
                </div>
                <div className="text-2xl font-bold text-[#2B2B2B] mb-1">{kpi.value}</div>
                <div className="text-sm text-gray-600">{kpi.label}</div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-4 border border-gray-200 mb-6">
          <h3 className="mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Button className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2 justify-start">
              <Upload className="w-4 h-4" />
              Upload Leads
            </Button>
            <Button className="w-full bg-[#336699] hover:bg-[#336699]/90 text-white gap-2 justify-start">
              <Clock className="w-4 h-4" />
              Schedule Follow-Up
            </Button>
            <Button className="w-full bg-[#336699] hover:bg-[#336699]/90 text-white gap-2 justify-start">
              <Eye className="w-4 h-4" />
              View Appointments
            </Button>
          </div>
        </div>

        {/* Recent Calls - Collapsible Cards */}
        <div className="bg-white border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <h3>Recent Call Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentCalls.map((call) => (
              <div key={call.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold">{call.leadName}</div>
                  <span className="text-sm text-gray-500">{call.time}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs ${
                    call.outcome === 'Appointment Set' ? 'bg-green-100 text-green-800' :
                    call.outcome === 'Qualified Lead' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {call.outcome}
                  </span>
                  <span className={`px-2 py-1 text-xs ${
                    call.interest === 'High' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {call.interest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Plan */}
        <div className="bg-white border border-gray-200 p-4">
          <h3 className="mb-4">Subscription Plan</h3>
          <div className="text-xl font-bold text-[#2B2B2B] mb-1">Pro Plan</div>
          <div className="text-sm text-gray-600 mb-4">$199/month</div>
          
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Call Usage</span>
              <span className="text-sm">847 / 1000</span>
            </div>
            <Progress value={84.7} className="h-2 bg-gray-200" />
            <div className="text-xs text-amber-600 mt-2">⚠️ 85% of calls used</div>
          </div>

          <Button className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
            Upgrade Plan
          </Button>
        </div>
      </div>
    </div>
  );
}
