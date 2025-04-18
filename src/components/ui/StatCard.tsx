import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  change?: string;
  changeType?: 'positive' | 'negative';
  iconColor?: string; // Add prop for custom icon color
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
  iconColor = 'text-primary dark:text-blue-400' // Default color, can be overridden
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center space-y-2 pb-2">
        {/* Apply iconColor */}
        <Icon className={`h-6 w-6 ${iconColor}`} />
        <CardTitle className="text-sm font-medium text-muted-foreground text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center pt-0">
        <div className="text-2xl font-bold mb-1">{value}</div>
        {change && (
           <p className={`text-xs ${changeType === 'positive' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
            {change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
