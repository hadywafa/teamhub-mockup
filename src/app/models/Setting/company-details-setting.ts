import AddressSetting from "./address-setting";
import PhoneNumberSetting from "./phone-number-setting";
import TollSetting from "./toll-setting";

export default class CompanyDetailsSetting {
  title!: boolean;
  companyName!: boolean;
  address!: boolean;
  phoneNumber!: boolean;
  toll!: boolean;
  website!: boolean;
  addressSetting: AddressSetting = new AddressSetting();
  phoneNumberSetting: PhoneNumberSetting = new PhoneNumberSetting();
  tollSetting: TollSetting = new TollSetting();
}
