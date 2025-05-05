
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <Card className={cn("h-full transition-all hover:shadow-md hover:border-mint-primary/30", className)}>
      <CardHeader>
        {icon && <div className="mb-2 text-mint-primary">{icon}</div>}
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
