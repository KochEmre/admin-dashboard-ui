import React from 'react';
import ChartPlaceholder from '../components/ui/ChartPlaceholder';
import StatCard from '../components/ui/StatCard';
import { BarChart, Users, Activity, TrendingUp } from 'lucide-react';

// Sample data for Analytics charts
const trafficData = [
  { label: 'Organic', value: 45000 }, { label: 'Direct', value: 25000 }, { label: 'Referral', value: 15000 },
  { label: 'Social', value: 10000 }, { label: 'Email', value: 5000 },
];

const referrerData = [
  { label: 'Google', value: 30000 }, { label: 'Facebook', value: 8000 }, { label: 'Twitter', value: 5000 },
  { label: 'GitHub', value: 3000 }, { label: 'Other', value: 9000 },
];

const demographicsData = [
    { label: '18-24', value: 25 }, { label: '25-34', value: 40 }, { label: '35-44', value: 20 },
    { label: '45-54', value: 10 }, { label: '55+', value: 5 },
];

const Analytics: React.FC = () => {
  return (
    <main className="flex-1 p-4 md:p-6">
      <h1 className="mb-4 text-2xl font-semibold md:text-3xl">Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Page Views"
          value="1.2M"
          icon={BarChart}
          change="+15.2%"
          changeType="positive"
          iconColor="text-sky-500 dark:text-sky-400"
        />
        <StatCard
          title="Unique Visitors"
          value="850K"
          icon={Users}
          change="+12.8%"
          changeType="positive"
           iconColor="text-violet-500 dark:text-violet-400"
        />
        <StatCard
          title="Bounce Rate"
          value="45.6%"
          icon={Activity}
          change="-2.1%"
          changeType="negative"
          iconColor="text-amber-500 dark:text-amber-400"
        />
        <StatCard
          title="Conversion Rate"
          value="5.8%"
          icon={TrendingUp}
          change="+0.5%"
          changeType="positive"
          iconColor="text-lime-500 dark:text-lime-400"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
         <ChartPlaceholder title="Traffic Sources" data={trafficData} className="lg:col-span-2" />
         <ChartPlaceholder title="Top Referrers" data={referrerData} />
      </div>
       <div className="mt-6">
         <ChartPlaceholder title="User Demographics" data={demographicsData} />
      </div>
    </main>
  );
};

export default Analytics;
