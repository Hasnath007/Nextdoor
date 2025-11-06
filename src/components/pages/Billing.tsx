import React from 'react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

export function Billing() {
  const currentPlan = {
    name: 'Pro Plan',
    price: 199,
    renewalDate: 'Dec 1, 2025',
    callsUsed: 847,
    callsTotal: 1000,
  };

  const billingHistory = [
    { id: 1, date: 'Nov 1, 2025', description: 'Pro Plan - Monthly Subscription', amount: '$199.00', status: 'Paid' },
    { id: 2, date: 'Oct 1, 2025', description: 'Pro Plan - Monthly Subscription', amount: '$199.00', status: 'Paid' },
    { id: 3, date: 'Sep 15, 2025', description: '100-Call Top-Up', amount: '$99.00', status: 'Paid' },
    { id: 4, date: 'Sep 1, 2025', description: 'Pro Plan - Monthly Subscription', amount: '$199.00', status: 'Paid' },
    { id: 5, date: 'Aug 1, 2025', description: 'Starter Plan - Monthly Subscription', amount: '$99.00', status: 'Paid' },
  ];

  const usagePercentage = (currentPlan.callsUsed / currentPlan.callsTotal) * 100;

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="mb-6">Billing & Subscription</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Current Plan */}
        <div className="lg:col-span-2 bg-white border border-gray-200 p-6">
          <h3 className="mb-6">Current Plan</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-sm text-gray-600 mb-2">Plan Name</div>
              <div className="text-2xl font-bold text-[#2B2B2B]">{currentPlan.name}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Monthly Fee</div>
              <div className="text-2xl font-bold text-[#2B2B2B]">${currentPlan.price}.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Renewal Date</div>
              <div className="text-xl">{currentPlan.renewalDate}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Auto-Renew</div>
              <div className="text-xl">Enabled</div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Call Usage</span>
              <span className="text-sm">{currentPlan.callsUsed} / {currentPlan.callsTotal}</span>
            </div>
            <Progress value={usagePercentage} className="h-3 bg-gray-200" />
            {usagePercentage >= 80 && (
              <div className="text-sm text-amber-600 mt-2 flex items-center gap-1">
                <span>⚠️</span>
                <span>{Math.round(usagePercentage)}% of calls used - Consider upgrading or purchasing a top-up</span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <Button className="bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white">
              Upgrade Plan
            </Button>
            <Button className="bg-[#336699] hover:bg-[#336699]/90 text-white">
              Buy 100-Call Top-Up ($99)
            </Button>
          </div>
        </div>

        {/* Available Plans */}
        <div className="bg-white border border-gray-200 p-6">
          <h3 className="mb-4">Available Plans</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-1">Starter</div>
              <div className="text-2xl font-bold text-[#2B2B2B] mb-2">$99/mo</div>
              <div className="text-sm text-gray-600">500 calls/month</div>
            </div>

            <div className="border-2 border-[#1E7A7A] p-4 bg-[#1E7A7A]/5">
              <div className="font-bold mb-1 text-[#1E7A7A]">Pro (Current)</div>
              <div className="text-2xl font-bold text-[#2B2B2B] mb-2">$199/mo</div>
              <div className="text-sm text-gray-600">1,000 calls/month</div>
            </div>

            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-1">Brokerage</div>
              <div className="text-2xl font-bold text-[#2B2B2B] mb-2">$499/mo</div>
              <div className="text-sm text-gray-600">3,000 calls/month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3>Billing History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFB]">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Date</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Description</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Amount</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-[#F8FAFB]">
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4 font-bold">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-sm bg-green-100 text-green-800">
                      {item.status}
                    </span>
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
