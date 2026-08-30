import React from 'react';
import { WorkStackedDeck } from './WorkStackedDeck';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';

interface WorkViewProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onOpenCaseStudy }) => {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkStackedDeck
          projects={PROJECTS}
          onOpenProject={onOpenCaseStudy}
        />
      </div>
    </div>
  );
};

