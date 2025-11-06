import React, { useState } from 'react';
import { Play, Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function CallLogs() {
  const [outcomeFilter, setOutcomeFilter] = useState('all');
  const [agentFilter, setAgentFilter] = useState('all');

  const calls = [
    { id: 1, date: 'Nov 1, 2025', leadName: 'Sarah Mitchell', duration: '4:23', outcome: 'Appointment Set', notes: 'Scheduled showing for 3BR downtown condo', recording: true },
    { id: 2, date: 'Nov 1, 2025', leadName: 'John Peterson', duration: '2:15', outcome: 'Callback Requested', notes: 'Will call back after reviewing listings', recording: true },
    { id: 3, date: 'Nov 1, 2025', leadName: 'Emma Rodriguez', duration: '6:42', outcome: 'Qualified Lead', notes: 'Discussed selling timeline and market conditions', recording: true },
    { id: 4, date: 'Nov 1, 2025', leadName: 'Michael Chen', duration: '1:58', outcome: 'No Answer', notes: 'Left voicemail with callback number', recording: false },
    { id: 5, date: 'Nov 1, 2025', leadName: 'Lisa Anderson', duration: '5:12', outcome: 'Appointment Set', notes: 'Investment property consultation scheduled', recording: true },
    { id: 6, date: 'Oct 31, 2025', leadName: 'David Kim', duration: '3:45', outcome: 'Qualified Lead', notes: 'Interested in relocation package details', recording: true },
    { id: 7, date: 'Oct 31, 2025', leadName: 'Jennifer Taylor', duration: '8:21', outcome: 'Appointment Set', notes: 'Private luxury home tour arranged', recording: true },
    { id: 8, date: 'Oct 31, 2025', leadName: 'Robert Johnson', duration: '4:10', outcome: 'Callback Requested', notes: 'Needs to discuss with spouse', recording: true },
  ];

  const summary = {
    totalCalls: 847,
    avgDuration: '4:32',
    completionRate: '87%',
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case 'Appointment Set':
        return 'bg-green-100 text-green-800';
      case 'Qualified Lead':
        return 'bg-blue-100 text-blue-800';
      case 'Callback Requested':
        return 'bg-yellow-100 text-yellow-800';
      case 'No Answer':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Call Logs</h1>

      {/* Summary Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total Calls</div>
          <div className="text-3xl font-bold text-[#2B2B2B]">{summary.totalCalls}</div>
        </div>
        <div className="bg-white p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Average Duration</div>
          <div className="text-3xl font-bold text-[#2B2B2B]">{summary.avgDuration}</div>
        </div>
        <div className="bg-white p-6 border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
          <div className="text-3xl font-bold text-[#2B2B2B]">{summary.completionRate}</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 border border-gray-200 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Filters:</span>
          </div>
          <div className="flex-1 min-w-[200px] max-w-xs">
            <Select value={outcomeFilter} onValueChange={setOutcomeFilter}>
              <SelectTrigger className="bg-[#F8FAFB]">
                <SelectValue placeholder="Outcome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Outcomes</SelectItem>
                <SelectItem value="appointment">Appointment Set</SelectItem>
                <SelectItem value="qualified">Qualified Lead</SelectItem>
                <SelectItem value="callback">Callback Requested</SelectItem>
                <SelectItem value="noanswer">No Answer</SelectItem>
              </SelectContent>
            </Select>
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
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white">
            Apply Filters
          </Button>
        </div>
      </div>

      {/* Call Logs Table */}
      <div className="bg-white border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFB]">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Lead Name</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Duration</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Outcome</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Notes</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Recording</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => (
                <tr key={call.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
                  <td className="px-6 py-4 text-sm text-gray-600">{call.date}</td>
                  <td className="px-6 py-4">{call.leadName}</td>
                  <td className="px-6 py-4 text-sm">{call.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-sm ${getOutcomeColor(call.outcome)}`}>
                      {call.outcome}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-md">{call.notes}</td>
                  <td className="px-6 py-4">
                    {call.recording ? (
                      <button className="flex items-center gap-2 text-[#1E7A7A] hover:text-[#1E7A7A]/80">
                        <Play className="w-4 h-4" />
                        <span className="text-sm">Play</span>
                      </button>
                    ) : (
                      <span className="text-sm text-gray-400">No recording</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
