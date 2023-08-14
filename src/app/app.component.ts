import { Component, OnInit } from "@angular/core";
import {
  CompanyProfileComponent,
  CompanyProfilePopupData,
} from "./components/company-profile-popup/company-profile-popup.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { AppLanguages } from "./models/enums/app-languages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(public dialog: MatDialog, private translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.setDefaultLang(AppLanguages.English);
  }

  openCompanyProfilePopup(
    targetCompanyID: number,
    selectedCompanyRegistrationId: number,
    registrationTypeId: number
  ): void {
    const data: CompanyProfilePopupData = {
      companyId: targetCompanyID,
      companyRegistrationId: selectedCompanyRegistrationId,
      companyRegistrationTypeId: registrationTypeId,
    };
    const dialogRef = this.dialog.open(CompanyProfileComponent, {
      data: data,
      width: "60%",
      maxHeight: "85%",
    });
    dialogRef.afterClosed().subscribe(() => {
      // this.selectedCompanyId = targetCompanyID;
      // this.selectedCompanyRegistrationId = selectedCompanyRegistrationId;
    });
  }
}
