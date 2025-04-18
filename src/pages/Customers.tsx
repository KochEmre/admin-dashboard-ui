import React from 'react';
import DataTablePlaceholder from '../components/ui/DataTablePlaceholder';
import StatCard from '../components/ui/StatCard';
import { Users, UserPlus, UserCheck, UserX } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Customers: React.FC = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold md:text-3xl">Customers</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total Customers"
          value="10,582"
          icon={Users}
        />
        <StatCard
          title="New This Month"
          value="+1,204"
          icon={UserPlus}
          changeType="positive"
        />
        <StatCard
          title="Active Customers"
          value="8,930"
          icon={UserCheck}
        />
         <StatCard
          title="Inactive Customers"
          value="1,652"
          icon={UserX}
        />
      </div>
      <DataTablePlaceholder title="Customer List" description="Manage your customers." />
    </main>
  );
};

export default Customers;
