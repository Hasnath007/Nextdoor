import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

interface OnboardingProps {
  onNavigate: (page: string) => void;
}

export function Onboarding({ onNavigate }: OnboardingProps) {
  const [selectedSize, setSelectedSize] = useState('small');
  const [autoProvision, setAutoProvision] = useState(true);

  const handleComplete = () => {
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="mb-2">Welcome to nexdoor.ai</h1>
            <p className="text-gray-600">Let's set up your account</p>
          </div>

          <div className="space-y-8">
            {/* Brokerage Size Selection */}
            <div>
              <Label className="mb-4 block">Select Your Brokerage Size</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedSize('small')}
                  className={`p-6 border-2 transition-colors ${
                    selectedSize === 'small'
                      ? 'border-[#1E7A7A] bg-[#1E7A7A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl font-bold mb-2">Small</div>
                  <div className="text-sm text-gray-600">1-5 agents</div>
                </button>

                <button
                  onClick={() => setSelectedSize('medium')}
                  className={`p-6 border-2 transition-colors ${
                    selectedSize === 'medium'
                      ? 'border-[#1E7A7A] bg-[#1E7A7A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl font-bold mb-2">Medium</div>
                  <div className="text-sm text-gray-600">6-20 agents</div>
                </button>

                <button
                  onClick={() => setSelectedSize('large')}
                  className={`p-6 border-2 transition-colors ${
                    selectedSize === 'large'
                      ? 'border-[#1E7A7A] bg-[#1E7A7A]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl font-bold mb-2">Large</div>
                  <div className="text-sm text-gray-600">20+ agents</div>
                </button>
              </div>
            </div>

            {/* Auto-provision Options */}
            <div>
              <Label className="mb-4 block">Setup Options</Label>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-[#F8FAFB] border border-gray-200">
                  <Checkbox 
                    id="autoprovision" 
                    checked={autoProvision}
                    onCheckedChange={(checked) => setAutoProvision(checked as boolean)}
                  />
                  <div className="flex-1">
                    <Label htmlFor="autoprovision" className="cursor-pointer">
                      Auto-provision Twilio Number
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Automatically set up a dedicated phone number for your AI voice agents
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#F8FAFB] border border-gray-200">
                  <Checkbox id="compliance" defaultChecked />
                  <div className="flex-1">
                    <Label htmlFor="compliance" className="cursor-pointer">
                      Enable Compliance Features
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Automatically check DNC registry and store voice consent
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#F8FAFB] border border-gray-200">
                  <Checkbox id="analytics" defaultChecked />
                  <div className="flex-1">
                    <Label htmlFor="analytics" className="cursor-pointer">
                      Enable Analytics & Reporting
                    </Label>
                    <p className="text-sm text-gray-600 mt-1">
                      Track call metrics, conversion rates, and agent performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Plan */}
            <div className="bg-[#1E7A7A]/5 border border-[#1E7A7A] p-6">
              <div className="mb-4">
                <div className="text-sm text-gray-600 mb-1">Recommended Plan</div>
                <div className="text-2xl font-bold text-[#2B2B2B]">
                  {selectedSize === 'small' ? 'Starter Plan' :
                   selectedSize === 'medium' ? 'Pro Plan' :
                   'Brokerage Plan'}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {selectedSize === 'small' ? '500 calls/month • $99/mo' :
                 selectedSize === 'medium' ? '1,000 calls/month • $199/mo' :
                 '3,000 calls/month • $499/mo'}
              </div>
            </div>

            <Button 
              onClick={handleComplete}
              className="w-full bg-[#1E7A7A] hover:bg-[#1E7A7A]/90 text-white"
            >
              Complete Setup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
