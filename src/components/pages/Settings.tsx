import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [dncEnabled, setDncEnabled] = useState(true);

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'team', label: 'Team Access' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-6 py-4 text-left border-b border-gray-200 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#1E7A7A] text-white'
                    : 'hover:bg-[#F8FAFB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="mb-6">Profile Settings</h3>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Demo User" className="mt-2 bg-[#F8FAFB]" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="demo@nexdoor.ai" className="mt-2 bg-[#F8FAFB]" />
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="est">
                    <SelectTrigger id="timezone" className="mt-2 bg-[#F8FAFB]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (EST)</SelectItem>
                      <SelectItem value="cst">Central Time (CST)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="mb-6">CRM Integrations</h3>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <Label htmlFor="hubspot">HubSpot API Key</Label>
                  <Input id="hubspot" placeholder="Enter your HubSpot API key" className="mt-2 bg-[#F8FAFB]" />
                  <p className="text-sm text-gray-500 mt-1">Connect your HubSpot account to sync leads automatically</p>
                </div>
                <div>
                  <Label htmlFor="zoho">Zoho CRM API Key</Label>
                  <Input id="zoho" placeholder="Enter your Zoho API key" className="mt-2 bg-[#F8FAFB]" />
                  <p className="text-sm text-gray-500 mt-1">Integrate with Zoho CRM for seamless data flow</p>
                </div>
                <div>
                  <Label htmlFor="followupboss">FollowUpBoss API Key</Label>
                  <Input id="followupboss" placeholder="Enter your FollowUpBoss API key" className="mt-2 bg-[#F8FAFB]" />
                  <p className="text-sm text-gray-500 mt-1">Sync with FollowUpBoss for lead management</p>
                </div>
                <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
                  Save Integrations
                </Button>
              </div>
            </div>
          )}

          {/* Compliance Tab */}
          {activeTab === 'compliance' && (
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="mb-6">Compliance Settings</h3>
              <div className="space-y-6 max-w-2xl">
                <div className="flex items-center justify-between p-4 bg-[#F8FAFB] border border-gray-200">
                  <div>
                    <div className="font-bold">Do Not Call (DNC) Registry</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Automatically check numbers against DNC registry before calling
                    </div>
                  </div>
                  <Switch checked={dncEnabled} onCheckedChange={setDncEnabled} />
                </div>
                
                <div className="p-4 bg-[#F8FAFB] border border-gray-200">
                  <div className="font-bold mb-2">Voice Consent Storage</div>
                  <div className="text-sm text-gray-600 mb-4">
                    All call recordings are stored securely for compliance purposes
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Retention Period</div>
                      <div>90 days</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Storage Location</div>
                      <div>US-East</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200">
                  <div className="text-sm text-blue-800">
                    ℹ️ Your account is compliant with TCPA regulations. Last audit: Oct 15, 2025
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Access Tab */}
          {activeTab === 'team' && (
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3>Team Access</h3>
                <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
                  Invite User
                </Button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F8FAFB]">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm text-gray-600">Name</th>
                      <th className="px-6 py-3 text-left text-sm text-gray-600">Email</th>
                      <th className="px-6 py-3 text-left text-sm text-gray-600">Role</th>
                      <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4">Demo User</td>
                      <td className="px-6 py-4 text-sm text-gray-600">demo@nexdoor.ai</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-sm bg-purple-100 text-purple-800">Owner</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-sm bg-green-100 text-green-800">Active</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4">Jane Smith</td>
                      <td className="px-6 py-4 text-sm text-gray-600">jane@example.com</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800">Admin</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-sm bg-green-100 text-green-800">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
