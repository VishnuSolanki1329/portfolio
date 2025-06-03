
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level }) => {
  return (
    <div className="glass-card rounded-2xl p-6 card-hover">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
          <span className="text-2xl font-bold">{icon}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
          <div 
            className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
    </div>
  );
};

export default SkillCard;
