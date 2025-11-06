import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const [agentFilter, setAgentFilter] = useState('all');
  const [regionFilter, setRegionFilter] = useState('all');

  const callsPerDay = [
    { date: 'Oct 26', calls: 42 },
    { date: 'Oct 27', calls: 38 },
    { date: 'Oct 28', calls: 51 },
    { date: 'Oct 29', calls: 45 },
    { date: 'Oct 30', calls: 49 },
    { date: 'Oct 31', calls: 44 },
    { date: 'Nov 1', calls: 47 },
  ];

  const outcomes = [
    { name: 'Completed', value: 412, color: '#22c55e' },
    { name: 'Missed', value: 87, color: '#ef4444' },
    { name: 'Qualified', value: 156, color: '#1E7A7A' },
  ];

  const conversionFunnel = [
    { stage: 'Total Calls', count: 847 },
    { stage: 'Connected', count: 742 },
    { stage: 'Interested', count: 423 },
    { stage: 'Qualified', count: 234 },
    { stage: 'Appointments', count: 87 },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Analytics</h1>

      {/* Filters */}
      <div className="bg-white p-4 border border-gray-200 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Filters:</span>
          </div>
          <div className="flex-1 min-w-[200px] max-w-xs">
            <Select value={agentFilter} onValueChange={setAgentFilter}>
              <SelectTrigger className="bg-[#F8FAFB]">
                <SelectValue placeholder="Agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Agents</SelectItem>
                <SelectItem value="ai1">AI Agent 1</SelectItem>
                <SelectItem value="ai2">AI Agent 2</SelectItem>
                <SelectItem value="ai3">AI Agent 3</SelectItem>
                <SelectItem value="ai4">AI Agent 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px] max-w-xs">
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="bg-[#F8FAFB]">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white">
            Apply Filters
          </Button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Calls Per Day */}
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="mb-6">Calls Per Day</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={callsPerDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="calls" stroke="#1E7A7A" strokeWidth={2} name="Calls" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Call Outcomes */}
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="mb-6">Call Outcomes Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={outcomes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {outcomes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white border border-gray-200 p-6">
        <h3 className="mb-6">Appointment Conversion Funnel</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conversionFunnel} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="stage" type="category" stroke="#6b7280" width={120} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#1E7A7A" name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {conversionFunnel.map((stage, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#2B2B2B]">{stage.count}</div>
              <div className="text-sm text-gray-600">{stage.stage}</div>
              {index < conversionFunnel.length - 1 && (
                <div className="text-xs text-gray-500 mt-1">
                  {Math.round((conversionFunnel[index + 1].count / stage.count) * 100)}% →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
