export interface OrganizationMemberNodeData {
    name: string;
    age: number;
    email: string;
};

export interface OrganizationMemberNode {
  nodeId: number;
  expanded: boolean;
  label: string;
  data: OrganizationMemberNodeData;
  children: OrganizationMemberNode[];
};
