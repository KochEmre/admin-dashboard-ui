import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

interface ChartPlaceholderProps {
  title: string;
  className?: string;
  // Simple data structure for demonstration
  data?: { label: string; value: number }[];
  chartType?: 'bar' | 'line'; // Add type for potential future variations
}

// Default sample data if none provided
const defaultBarData = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 59 },
  { label: 'Mar', value: 80 },
  { label: 'Apr', value: 81 },
  { label: 'May', value: 56 },
  { label: 'Jun', value: 55 },
  { label: 'Jul', value: 40 },
];

const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({
  title,
  className,
  data = defaultBarData, // Use default data
  chartType = 'bar' // Default to bar chart
}) => {
  // State to track if component is mounted (for animations)
  const [mounted, setMounted] = useState(false);

  // Ensure data is an array before processing
  const validData = Array.isArray(data) ? data : [];

  // Calculate maxValue safely, defaulting to 100 if data is empty or invalid
  const maxValue = validData.length > 0 ? Math.max(...validData.map(d => d.value), 100) : 100;

  // Container yüksekliği (piksel cinsinden)
  const CONTAINER_HEIGHT = 200; // Chart container'ın kullanılabilir yüksekliği (padding hariç)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);

    // For debugging
    console.log("Chart data:", validData);
    console.log("Max value:", maxValue);
  }, []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Chart container with fixed height */}
        <div className="relative h-64 w-full rounded-lg border border-dashed bg-gray-100 dark:bg-gray-800 p-4">
          {/* Chart bars container */}
          <div className="flex h-full items-end justify-around">
            {validData.map((item, index) => {
              // Calculate height percentage (0-100)
              const heightPercent = Math.max(0, (item.value / maxValue) * 100);

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center"
                  style={{ width: `${100 / validData.length}%`, maxWidth: '60px' }}
                  title={`${item.label}: ${item.value}`}
                >
                  {/* Bar with animated height */}
                  <div
                    className="w-full max-w-[30px] mx-auto rounded-t-md bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-out"
                    style={{
                      height: mounted ? `${(heightPercent / 100) * CONTAINER_HEIGHT}px` : '0px', // Yüzdeyi piksel değerine dönüştürme
                      minHeight: heightPercent > 0 ? '4px' : '0px',
                      transitionDelay: `${index * 50}ms`
                    }}
                  />
                  {/* Label */}
                  <span className="mt-2 text-xs text-muted-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* No data message */}
          {validData.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              No data available for chart.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartPlaceholder;
