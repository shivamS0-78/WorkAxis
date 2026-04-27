import { Loader } from '@/components/loader';
import CreateProjectDialog from '@/components/projectDash/create-project';
import InviteMemberDialog from '@/components/projectDash/invite-member';
import Projectlist from '@/components/projectDash/projectlist';
import { useGetProjectQuery } from '@/hooks/use-project';
import type { Project } from '@/types';
import React, { useState } from 'react'

const ProjectsDashboard = () => {
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [isInviteMember, setIsInviteMember] = useState(false);

  const { data, isLoading } = useGetProjectQuery() as {
    data: {
      projects: Project[];
    };
    isLoading: boolean;
  }

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }
  return (
    <div className="space-y-8">
      <Projectlist
        projects={data.projects}
        onCreateProject={() => setIsCreateProject(true)}
      />

      <CreateProjectDialog
        isOpen={isCreateProject}
        onOpenChange={setIsCreateProject}
        // projectMembers={data.projects.members as any}
      />

      {/* <InviteMemberDialog
        isOpen={isInviteMember}
        onOpenChange={setIsInviteMember}
      /> */}
    </div>
  );
}

export default ProjectsDashboard;