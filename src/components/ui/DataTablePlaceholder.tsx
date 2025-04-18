import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './Card';

interface DataTablePlaceholderProps {
  title: string;
  description: string;
  className?: string;
}

const DataTablePlaceholder: React.FC<DataTablePlaceholderProps> = ({ title, description, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-4 py-2 font-medium">ID</th>
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Email</th>
                <th className="px-4 py-2 font-medium">Role</th>
                <th className="px-4 py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b last:border-b-0 hover:bg-muted/50">
                  <td className="px-4 py-3">USR-{1000 + i}</td>
                  <td className="px-4 py-3">Placeholder Name {i}</td>
                  <td className="px-4 py-3">user{i}@example.com</td>
                  <td className="px-4 py-3">{i % 2 === 0 ? 'Admin' : 'User'}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${i % 3 === 0 ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'}`}>
                      {i % 3 === 0 ? 'Inactive' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         <div className="mt-4 flex justify-end text-sm text-muted-foreground">
            Showing 1-5 of 20 results
         </div>
      </CardContent>
    </Card>
  );
};

export default DataTablePlaceholder;
