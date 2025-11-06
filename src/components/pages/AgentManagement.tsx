import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function AgentManagement() {
  const agents = [
    { id: 1, name: 'AI Agent 1', region: 'North', leads: 156, calls: 423, conversion: '8.2%', status: 'Active' },
    { id: 2, name: 'AI Agent 2', region: 'South', leads: 142, calls: 391, conversion: '7.5%', status: 'Active' },
    { id: 3, name: 'AI Agent 3', region: 'East', leads: 98, calls: 267, conversion: '6.9%', status: 'Active' },
    { id: 4, name: 'AI Agent 4', region: 'West', leads: 134, calls: 356, conversion: '7.8%', status: 'Active' },
  ];

  const chartData = [
    { name: 'AI Agent 1', calls: 423, conversions: 35 },
    { name: 'AI Agent 2', calls: 391, conversions: 29 },
    { name: 'AI Agent 3', calls: 267, conversions: 18 },
    { name: 'AI Agent 4', calls: 356, conversions: 28 },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1>Agent Management</h1>
        <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2">
          <Plus className="w-4 h-4" />
          Add Agent
        </Button>
      </div>

      {/* Agents Table */}
      <div className="bg-white border border-gray-200 mb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFB]">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Agent Name</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Region</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Leads</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Calls</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Conversion %</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
                  <td className="px-6 py-4">{agent.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{agent.region}</td>
                  <td className="px-6 py-4 text-sm">{agent.leads}</td>
                  <td className="px-6 py-4 text-sm">{agent.calls}</td>
                  <td className="px-6 py-4 text-sm">{agent.conversion}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800">
                      {agent.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white border border-gray-200 p-6">
        <h3 className="mb-6">Agent Performance - Calls vs Conversions</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="calls" fill="#1E7A7A" name="Total Calls" />
              <Bar dataKey="conversions" fill="#336699" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
