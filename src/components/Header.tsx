import React from 'react';
import { Search, Bell, UserCircle, PanelLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/Button';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
       <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
         <PanelLeft className="h-6 w-6" />
         <span className="sr-only">Toggle Sidebar</span>
       </Button>
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-input bg-background py-2 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-ring md:w-1/2 lg:w-1/3"
        />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-6 w-6" />
          <span className="sr-only">User Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
