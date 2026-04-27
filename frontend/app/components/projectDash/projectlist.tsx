import type { Project } from '@/types';
import React from 'react'
import NoDataFound from '../no-data-found';
import { ProjectCard } from './project-card';

interface ProjectlistProps {
    projects : Project[];
    onCreateProject: ()=> void ; 
}

const Projectlist = ({
    projects,
    onCreateProject,
}: ProjectlistProps) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Projects</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <NoDataFound
            title="No projects found"
            description="Create a project to get started"
            buttonText="Create Project"
            buttonAction={onCreateProject}
          />
        ) : (
          projects.map((project) => {
            const projectProgress = 0;

            return (
              <ProjectCard
                key={project._id}
                project={project}
                progress={projectProgress}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Projectlist