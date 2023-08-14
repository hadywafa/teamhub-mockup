import { Injectable } from "@angular/core";
import { map, Observable, of, tap } from "rxjs";
import { surveyInfoSummaryDummyDataString } from "src/app/dummy-data/company-profile-popup-dummy-data";
import { SurveyFormModel } from "src/app/models/SurveyForm/survey-form";

@Injectable({
  providedIn: "root",
})
export class SurveyService {
  data = {} as any;

  constructor() {}

  getSurveySummary(contactId: number, companyRegistrationId?: number): Observable<SurveyFormModel> {
    const surveyInfoSummaryDummyData = JSON.parse(surveyInfoSummaryDummyDataString);

    return of(surveyInfoSummaryDummyData).pipe(tap((res: any) => console.log(res)));
  }
}
