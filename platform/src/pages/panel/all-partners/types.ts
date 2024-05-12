export interface PartnersProps {
  id: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
}

export interface ChangePartnerProps extends Omit<PartnersProps, "id"> {}