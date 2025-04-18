import React from 'react';
import StatCard from '../components/ui/StatCard';
import ChartPlaceholder from '../components/ui/ChartPlaceholder';
import DataTablePlaceholder from '../components/ui/DataTablePlaceholder';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

// Sample data for charts
const revenueData = [
  { label: 'Jan', value: 4000 }, { label: 'Feb', value: 3000 }, { label: 'Mar', value: 5000 },
  { label: 'Apr', value: 4500 }, { label: 'May', value: 6000 }, { label: 'Jun', value: 5500 },
  { label: 'Jul', value: 7000 },
];

const activityData = [
  { label: 'Mon', value: 200 }, { label: 'Tue', value: 300 }, { label: 'Wed', value: 250 },
  { label: 'Thu', value: 400 }, { label: 'Fri', value: 350 }, { label: 'Sat', value: 500 },
  { label: 'Sun', value: 450 },
];


const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <h1 className="mb-4 text-2xl font-semibold md:text-3xl">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          icon={DollarSign}
          change="+20.1%"
          changeType="positive"
          iconColor="text-green-500 dark:text-green-400" // Specific color
        />
        <StatCard
          title="Subscriptions"
          value="+2350"
          icon={Users}
          change="+180.1%"
          changeType="positive"
          iconColor="text-blue-500 dark:text-blue-400" // Specific color
        />
        <StatCard
          title="Sales"
          value="+12,234"
          icon={CreditCard}
          change="+19%"
          changeType="positive"
          iconColor="text-orange-500 dark:text-orange-400" // Specific color
        />
        <StatCard
          title="Active Now"
          value="+573"
          icon={Activity}
          change="+201"
          changeType="positive" // Let's make this positive for consistency example
           iconColor="text-indigo-500 dark:text-indigo-400" // Specific color
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
         {/* Pass sample data to charts */}
         <ChartPlaceholder title="Revenue Overview" data={revenueData} />
         <ChartPlaceholder title="User Activity" data={activityData} />
      </div>
       <div className="mt-6">
        <DataTablePlaceholder title="Recent Orders" description="An overview of the latest orders." />
      </div>
    </main>
  );
};

export default Dashboard;
