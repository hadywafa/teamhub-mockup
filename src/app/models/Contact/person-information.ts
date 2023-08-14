import { CommInfo } from "./comm-info";
export class PersonInformation {
  basicInfo!: PersonBasicInfo;
  commInfo!: CommInfo[];
}
export class PersonBasicInfo {
  personId!: number;
  loginId!: string;
  firstName!: string;
  middleName!: string;
  lastName!: string;
  informalName!: string;
  suffix!: string;
  title!: string;
  salutation!: string;
  designation!: string;
  email!: string;

  genderId!: number | null;
  preferredSeatTypeId!: number | null;
  dietaryRequestsIds!: number[];
  specialNeedsIds!: number[];

  otherMedicalInfo!: string;
  emergencyContactName!: string;
  emergencyContactPhone!: string;

  profileImage!: string;
}

export class UpdatePersonBasicInfo {
  loginId!: string;
  personId!: number;
  firstName!: string;
  middleName!: string;
  lastName!: string;
  informalName!: string;
  suffix!: string;
  title!: string;
  salutation!: string;
  designation!: string;
  email!: string;

  genderId!: number | null;
  preferredSeatTypeId!: number | null;
  dietaryRequestsIds!: number[];
  specialNeedsIds!: number[];

  otherMedicalInfo!: string;
  emergencyContactName!: string;
  emergencyContactPhone!: string;
}
