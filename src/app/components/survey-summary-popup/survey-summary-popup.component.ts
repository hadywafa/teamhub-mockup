import { Component, Input, OnInit } from "@angular/core";
import { takeUntil } from "rxjs";
import ClientSetting from "src/app/models/Setting/client-setting";
import { SurveyFormModel } from "src/app/models/SurveyForm/survey-form";
import { SURVEY_ANSWER_TYPES } from "src/app/models/enums/sur-answer-type";
import { SurveyService } from "src/app/services/survey-service/survey.service";
import { BaseComponent } from "src/app/shared/base.component";

@Component({
  selector: "app-survey-summary-popup-form",
  templateUrl: "./survey-summary-popup.component.html",
  styleUrls: ["./survey-summary-popup.component.css"],
})
export class SurveySummaryPopupComponent extends BaseComponent implements OnInit {
  @Input() companyId = 0;
  @Input() registrationId = 0;
  @Input() clientSetting = new ClientSetting();
  survey!: SurveyFormModel | null;
  readonly SURVEY_ANSWER_TYPE = SURVEY_ANSWER_TYPES;
  constructor(private surveyService: SurveyService) {
    super();
  }

  ngOnInit(): void {
    this.surveyService
      .getSurveySummary(this.companyId, this.registrationId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.survey = data;
      });
  }
}
