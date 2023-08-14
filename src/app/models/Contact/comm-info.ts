export class CommInfo {
  commTypeId!: number;
  commType!: string;
  isDisplayed!: boolean;
  isAutoLink!: boolean;
  isInLinkAll!: boolean;
  linkedToCommTypeId!: number | null;
  address: Address = new Address();
  phone: Phone = new Phone();
  fax: Fax = new Fax();
  tollFree: TollFree = new TollFree();
  mobile: Mobile = new Mobile();
  email: Email = new Email();
  website: Website = new Website();
}
export class UpdateCommInfo {
  commTypeId!: number;
  linkedToCommTypeId!: number | null;
  address: Address = new Address();
  phone: Phone = new Phone();
  fax: Fax = new Fax();
  tollFree: TollFree = new TollFree();
  mobile: Mobile = new Mobile();
  email: Email = new Email();
  website: Website = new Website();
}

export class Address {
  line1!: string;
  line2!: string;
  postalCode!: string;
  cityName!: string;
  stateId?: number;
  stateName!: string;
  countryId?: number;
  countryName!: string;
  isUsable!: number;
  stateCode!: string;
}

export class Phone {
  countryId?: number;
  countryName!: string;
  phoneCode!: string;
  prefix!: string;
  areaCode!: string;
  number!: string;
  extension!: string;
  isUsable!: number;
}

export class Fax {
  countryId?: number;
  countryName!: string;
  phoneCode!: string;
  prefix!: string;
  areaCode!: string;
  number!: string;
  extension!: string;
  isUsable!: number;
}

export class TollFree {
  countryId?: number;
  countryName!: string;
  phoneCode!: string;
  prefix!: string;
  areaCode!: string;
  number!: string;
  isUsable!: number;
}

export class Mobile {
  countryId?: number;
  countryName!: string;
  phoneCode!: string;
  prefix!: string;
  areaCode!: string;
  number!: string;
  isUsable!: number;
}

export class Email {
  email!: string;
  isUsable!: number;
}

export class Website {
  website!: string;
  isUsable!: number;
}
