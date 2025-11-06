import React, { useState } from 'react';
import { DollarSign, Users as UsersIcon, Phone, RefreshCw } from 'lucide-react';

export function AdminConsole() {
  const [activeTab, setActiveTab] = useState('users');

  const tabs = [
    { id: 'users', label: 'Users' },
    { id: 'billing', label: 'Billing' },
    { id: 'usage', label: 'Usage Metrics' },
    { id: 'support', label: 'Support' },
  ];

  const users = [
    { id: 1, client: 'Realty Group A', plan: 'Pro', callsUsed: 847, callsTotal: 1000, renewal: 'Dec 1, 2025', status: 'Active' },
    { id: 2, client: 'Premier Homes', plan: 'Brokerage', callsUsed: 2341, callsTotal: 3000, renewal: 'Dec 5, 2025', status: 'Active' },
    { id: 3, client: 'Metro Realty', plan: 'Starter', callsUsed: 423, callsTotal: 500, renewal: 'Nov 28, 2025', status: 'Active' },
    { id: 4, client: 'City Properties', plan: 'Pro', callsUsed: 756, callsTotal: 1000, renewal: 'Dec 10, 2025', status: 'Active' },
  ];

  const metrics = {
    totalUsers: 847,
    activeCalls: 47,
    monthlyRevenue: 124567,
    renewals: 23,
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Admin Console</h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#1E7A7A]/10">
              <UsersIcon className="w-6 h-6 text-[#1E7A7A]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#2B2B2B] mb-1">{metrics.totalUsers}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </div>

        <div className="bg-white p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#1E7A7A]/10">
              <Phone className="w-6 h-6 text-[#1E7A7A]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#2B2B2B] mb-1">{metrics.activeCalls}</div>
          <div className="text-sm text-gray-600">Active Calls Today</div>
        </div>

        <div className="bg-white p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#1E7A7A]/10">
              <DollarSign className="w-6 h-6 text-[#1E7A7A]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#2B2B2B] mb-1">${(metrics.monthlyRevenue / 1000).toFixed(0)}K</div>
          <div className="text-sm text-gray-600">Monthly Revenue</div>
        </div>

        <div className="bg-white p-6 border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-[#1E7A7A]/10">
              <RefreshCw className="w-6 h-6 text-[#1E7A7A]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#2B2B2B] mb-1">{metrics.renewals}</div>
          <div className="text-sm text-gray-600">Renewals This Week</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200">
        <div className="border-b border-gray-200 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#1E7A7A] text-white'
                  : 'hover:bg-[#F8FAFB]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8FAFB]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Client</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Plan</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Calls Used</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Renewal</th>
                  <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
                    <td className="px-6 py-4">{user.client}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-sm ${
                        user.plan === 'Brokerage' ? 'bg-purple-100 text-purple-800' :
                        user.plan === 'Pro' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {user.callsUsed} / {user.callsTotal}
                      <div className="text-xs text-gray-500 mt-1">
                        {Math.round((user.callsUsed / user.callsTotal) * 100)}% used
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.renewal}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-sm bg-green-100 text-green-800">
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Other tabs content */}
        {activeTab !== 'users' && (
          <div className="p-12 text-center text-gray-500">
            {activeTab === 'billing' && 'Billing overview coming soon'}
            {activeTab === 'usage' && 'Usage metrics coming soon'}
            {activeTab === 'support' && 'Support tickets coming soon'}
          </div>
        )}
      </div>
    </div>
  );
}
