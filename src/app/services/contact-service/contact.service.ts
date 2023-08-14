import { PersonInfoForCompanyProfileForEventHubDummyDataString } from './../../dummy-data/company-profile-popup-dummy-data';
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import {
  companyProfilePopupDummyDataString,
} from "src/app/dummy-data/company-profile-popup-dummy-data";
import { CompanyInformation } from "src/app/models/Contact/company-information";
import { PersonBasicInfo } from "src/app/models/Contact/person-information";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  data = {} as any;
  constructor() {}

  getCompanyContactDetails(
    companyId: number,
    regTypeId?: number,
    memberTypeId?: number
  ): Observable<CompanyInformation> {
    const companyProfilePopupDummyData = JSON.parse(companyProfilePopupDummyDataString);

    return of(companyProfilePopupDummyData).pipe(
      map((res: any) => {
        console.log(res);

        const companyInfo = new CompanyInformation();
        companyInfo.addressesInfo = res.commInfo;
        const clone = Object.assign({}, res);
        delete clone.commInfo;
        companyInfo.basicInfo = clone;
        console.log(companyInfo);
        return companyInfo;
      })
    );
  }

  getPersonInfoForCompanyProfileForEventHub(regTypeId: number): Observable<PersonBasicInfo[]> {
    return of(PersonInfoForCompanyProfileForEventHubDummyDataString).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
