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
  const [user, setUser] = useState<any>(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Load user & current page from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedPage = localStorage.getItem('currentPage');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setCurrentPage(storedPage || 'dashboard');
    }
  }, []);

  // Update localStorage whenever user or page changes
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    if (currentPage) localStorage.setItem('currentPage', currentPage);
  }, [user, currentPage]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('currentPage');
    setUser(null);
    setCurrentPage('login');
  };

  // Auth pages
  if (!user && currentPage === 'login') {
    return <Login onNavigate={setCurrentPage} onLoginSuccess={setUser} />;
  }

  if (!user && currentPage === 'register') {
    return <Register onNavigate={setCurrentPage} />;
  }

  if (!user && currentPage === 'onboarding') {
    return <Onboarding onNavigate={setCurrentPage} />;
  }

  // Desktop AND MOBILE views with layout
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return isMobile ? <MobileDashboard /> : <Dashboard />;
      case 'leads':
        return isMobile ? <MobileLeads user={user} /> : <Leads user={user} />;
      case 'calls':
        return <CallLogs />;
      case 'appointments':
        return isMobile ? <MobileAppointments /> : <Appointments />;
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
    <DashboardLayout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      user={user}
      onLogout={handleLogout}
    >
      {renderPage()}
    </DashboardLayout>
  );
}
