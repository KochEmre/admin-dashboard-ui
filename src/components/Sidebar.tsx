import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { LayoutDashboard, Settings, BarChart, Users, Package, LifeBuoy, LogOut, PanelLeft } from 'lucide-react';
import { Button } from './ui/Button';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BarChart, label: 'Analytics', path: '/analytics' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const baseLinkClasses = "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground";
  const activeLinkClasses = "bg-accent text-accent-foreground";
  const inactiveLinkClasses = "text-muted-foreground";


  return (
    <>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-full w-64 transform flex-col border-r bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          {/* Changed to NavLink for consistency, points to dashboard */}
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span>Admin Panel</span>
          </NavLink>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
             <PanelLeft className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {/* Use NavLink instead of <a> */}
                <NavLink
                  to={item.path}
                  // Apply active styles using NavLink's isActive prop
                  className={({ isActive }) =>
                    `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                  }
                  // Close sidebar on mobile after clicking a link
                  onClick={() => { if (window.innerWidth < 1024) toggleSidebar(); }}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto border-t p-4">
          <ul className="space-y-1">
             <li>
                {/* Keep these as <a> for now, or implement functionality later */}
                <a
                  href="#"
                  className={`${baseLinkClasses} ${inactiveLinkClasses}`}
                >
                  <LifeBuoy className="mr-3 h-5 w-5" />
                  Support
                </a>
              </li>
               <li>
                <a
                  href="#"
                  className={`${baseLinkClasses} ${inactiveLinkClasses}`}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Logout
                </a>
              </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
