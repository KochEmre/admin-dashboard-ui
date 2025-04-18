import React, { useState, useCallback } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);


  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 flex-col transition-all duration-300 ease-in-out lg:ml-64">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
