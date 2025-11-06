import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function Support() {
  const [selectedTicket, setSelectedTicket] = useState(1);

  const tickets = [
    { id: 1, subject: 'API Integration Issue', status: 'Open', date: 'Nov 1, 2025', priority: 'High' },
    { id: 2, subject: 'Call Recording Not Working', status: 'In Progress', date: 'Oct 31, 2025', priority: 'Medium' },
    { id: 3, subject: 'Billing Question', status: 'Resolved', date: 'Oct 30, 2025', priority: 'Low' },
  ];

  const messages = [
    { id: 1, ticketId: 1, sender: 'You', message: 'Having trouble connecting HubSpot API. Getting 401 error.', time: '10:30 AM' },
    { id: 2, ticketId: 1, sender: 'Support', message: 'Thanks for reaching out. Can you verify your API key is correct?', time: '10:45 AM' },
    { id: 3, ticketId: 1, sender: 'You', message: 'Yes, I double-checked. Still getting the same error.', time: '11:00 AM' },
    { id: 4, ticketId: 1, sender: 'Support', message: 'Let me check your account settings. One moment please.', time: '11:15 AM' },
  ];

  const currentTicket = tickets.find(t => t.id === selectedTicket);
  const currentMessages = messages.filter(m => m.ticketId === selectedTicket);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
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
        <h1>Support & Messaging</h1>
        <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white gap-2">
          <Plus className="w-4 h-4" />
          New Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - Ticket List */}
        <div className="lg:col-span-1 bg-white border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3>Support Tickets</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <button
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket.id)}
                className={`w-full p-4 text-left transition-colors ${
                  selectedTicket === ticket.id ? 'bg-[#F8FAFB]' : 'hover:bg-[#F8FAFB]'
                }`}
              >
                <div className="font-bold mb-1">{ticket.subject}</div>
                <div className="flex gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                  <span className={`px-2 py-1 text-xs ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>
                <div className="text-sm text-gray-500">{ticket.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right - Thread View */}
        <div className="lg:col-span-2 bg-white border border-gray-200 flex flex-col">
          {/* Thread Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h3>{currentTicket?.subject}</h3>
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Check className="w-4 h-4" />
                Mark Resolved
              </Button>
            </div>
            <div className="flex gap-2">
              <span className={`px-2 py-1 text-sm ${getStatusColor(currentTicket?.status || '')}`}>
                {currentTicket?.status}
              </span>
              <span className={`px-2 py-1 text-sm ${getPriorityColor(currentTicket?.priority || '')}`}>
                {currentTicket?.priority}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={`${
                  msg.sender === 'You' ? 'ml-12' : 'mr-12'
                }`}
              >
                <div className={`p-4 ${
                  msg.sender === 'You' 
                    ? 'bg-[#1E7A7A]/10 border border-[#1E7A7A]/20' 
                    : 'bg-[#F8FAFB] border border-gray-200'
                }`}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-sm">{msg.sender}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Section */}
          <div className="p-6 border-t border-gray-200">
            <div className="mb-4">
              <Select defaultValue="custom">
                <SelectTrigger className="bg-[#F8FAFB]">
                  <SelectValue placeholder="Canned replies" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">Custom reply</SelectItem>
                  <SelectItem value="thanks">Thank you for contacting us</SelectItem>
                  <SelectItem value="investigating">We're investigating this issue</SelectItem>
                  <SelectItem value="resolved">This issue has been resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea 
              placeholder="Type your message..." 
              className="mb-4 min-h-[100px] bg-[#F8FAFB]"
            />
            <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
              Send Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
