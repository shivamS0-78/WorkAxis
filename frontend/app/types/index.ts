export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  isEmailVerified: boolean;
  updatedAt: Date;
  profilePicture?: string;
}

export interface Workspace {
  _id : string ;
  name : string ;
  description ?: string ;
  owner : User | string ;
  color : string ;
  members : {
    user : User ;
    role : "admin" | "member" | "viewer" ;
    joinedAt : Date ;
  }[];
  createdAt : Date ;
  
}

export interface Project {
  _id : string ;
  title : string ;
  description ?: string ;
  startDate: Date;
  dueDate: Date;
  progress: number;
  tasks: Task[];
  status : "Planning"| "In Progress"| "On Hold"| "Completed"| "Cancelled";
  members: {
    user: User;
    role: "admin" | "member" | "owner" | "viewer";
  }[];
  createdAt : Date ;
  updatedAt : Date ;
}

export type TaskStatus = "To Do" | "In Progress" | "Done";
export type TaskPriority = "High" | "Medium" | "Low";

export interface Subtask {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  project: Project;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
  dueDate: Date;
  priority: TaskPriority;
  assignee: User | string;
  createdBy: User | string;
  assignees: User[];
  subtasks?: Subtask[];
}

export enum ProjectStatus {
  PLANNING = "Planning",
  IN_PROGRESS = "In Progress",
  ON_HOLD = "On Hold",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

export interface MemberProps {
  _id: string;
  user: User;
  role: "admin" | "member" | "owner" | "viewer" ;
  joinedAt: Date;
}
