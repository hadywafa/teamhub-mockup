import { CommInfo } from "../Contact/comm-info";
import Person from "../Contact/person";
import Resources from "./resources";

export default class CompanyProfile {
  companyId!: number;
  companyName!: string;
  instanceOwnerId!: number;
  publish: CommInfo = new CommInfo();
  resources: Resources[] = [];
  companyPersons: Person[] = [];
}
