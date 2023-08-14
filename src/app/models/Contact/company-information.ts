import Resources from "../Profiles/resources";
import { CommInfo } from "./comm-info";
export class CompanyInformation {
  basicInfo!: CompanyBasicInfo;
  addressesInfo!: CommInfo[];
}
export class CompanyBasicInfo {
  companyId!: number;
  companyTypeId?: number;
  companyCategoryIds!: number[];
  companyName!: string;
  legalName!: string;
  businessLicenseNumber!: string;
  iataNumber!: string;
  rfcTaxCode!: string;
  memberNumber!: string;
  companyNumber!: number;
  preferredAirCarrier!: string;
  resources: Resources[] = [];
  facebookUrl!: string;
  twitterUrl!: string;
  instagramUrl!: string;
  linkedinUrl!: string;
  companyCategory!: string;
  primaryPerson!: string;
  joinDate!: string;
  memberType!: string;
  liftEquipped!: string[];
  tourDestinations!: string[];
}

export class UpdateCompanyBasicInfo {
  companyId!: number;
  companyName!: string;
  legalName!: string;
  businessLicenseNumber!: string;
  iataNumber!: string;
  rfcTaxCode!: string;
  companyTypeId!: number | null;
  companyCategoryIds!: number[];

  facebookUrl!: string;
  twitterUrl!: string;
  instagramUrl!: string;
  linkedinUrl!: string;
}
