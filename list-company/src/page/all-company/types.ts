export interface CompanyProps {
  id: string;
  companyName: string;
  collaboratorsCount: string;
  isActive: boolean;
}

export interface ChangeCompanyProps extends Omit<CompanyProps, "id"> {}