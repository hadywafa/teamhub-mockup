import CompanyDetailsSetting from "./company-details-setting";
import CompanyResourcesSetting from "./company-resources-setting";
import PersonSetting from "./person-setting";
import StyleSetting from "./style-setting";

export default class ClientSetting {
  companyResources!: boolean;
  companyInfoPage!: boolean;
  personPage!: boolean;
  styleSetting: StyleSetting = new StyleSetting();
  companyResourcesSetting: CompanyResourcesSetting = new CompanyResourcesSetting();
  companyDetailsSetting: CompanyDetailsSetting = new CompanyDetailsSetting();
  personSetting: PersonSetting = new PersonSetting();
}
