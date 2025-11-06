import React, { useState, useEffect } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { Dashboard } from './components/pages/Dashboard';
import { Leads } from './components/pages/Leads';
import { CallLogs } from './components/pages/CallLogs';
import { Appointments } from './components/pages/Appointments';
import { AgentManagement } from './components/pages/AgentManagement';
import { Billing } from './components/pages/Billing';
import { Analytics } from './components/pages/Analytics';
import { Settings } from './components/pages/Settings';
import { AdminConsole } from './components/pages/AdminConsole';
import { Support } from './components/pages/Support';
import { Login } from './components/pages/Login';
import { Register } from './components/pages/Register';
import { Onboarding } from './components/pages/Onboarding';
import { MobileDashboard } from './components/pages/mobile/MobileDashboard';
import { MobileLeads } from './components/pages/mobile/MobileLeads';
import { MobileAppointments } from './components/pages/mobile/MobileAppointments';


export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isMobile, setIsMobile] = useState(false);


  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // Auth pages (no layout) - WORKS ON BOTH MOBILE AND DESKTOP ✅
  if (currentPage === 'login') {
    return <Login onNavigate={setCurrentPage} />;
  }


  if (currentPage === 'register') {
    return <Register onNavigate={setCurrentPage} />;
  }


  if (currentPage === 'onboarding') {
    return <Onboarding onNavigate={setCurrentPage} />;
  }


  /* COMMENTED OUT - Using DashboardLayout for mobile now
  // Mobile views for specific pages
  if (isMobile) {
    if (currentPage === 'dashboard') {
      return <MobileDashboard />;
    }
    if (currentPage === 'leads') {
      return <MobileLeads />;
    }
    if (currentPage === 'appointments') {
      return <MobileAppointments />;
    }
  }
  */


  // Desktop AND MOBILE views with layout
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'leads':
        return <Leads />;
      case 'calls':
        return <CallLogs />;
      case 'appointments':
        return <Appointments />;
      case 'agents':
        return <AgentManagement />;
      case 'billing':
        return <Billing />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'admin':
        return <AdminConsole />;
      case 'support':
        return <Support />;
      default:
        return <Dashboard />;
    }
  };


  return (
    <DashboardLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </DashboardLayout>
  );
}
