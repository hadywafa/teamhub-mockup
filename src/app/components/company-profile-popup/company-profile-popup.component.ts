import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { takeUntil } from "rxjs";
import { CommInfo, Phone, TollFree } from "src/app/models/Contact/comm-info";
import { CompanyInformation } from "src/app/models/Contact/company-information";
import { PersonBasicInfo } from "src/app/models/Contact/person-information";
import { APP_TYPE_MODE } from "src/app/models/enums/app-type-mode";
import { ResourceType } from "src/app/models/enums/resource-type";
import { BaseComponent } from "src/app/shared/base.component";
import { EffectFlip, Navigation, Pagination, SwiperOptions } from "swiper";
import { NgxPrintElementService } from "ngx-print-element";
import { Translations } from "src/app/services/translation-service/translations.service";
import { ContactService } from "src/app/services/contact-service/contact.service";

export class CompanyProfilePopupData {
  companyId: number = 0;
  companyRegistrationId: number = 0;
  companyRegistrationTypeId: number = 0;
  memberTypeId?: number = 0;
}
@Component({
  selector: "app-company-profile-popup",
  templateUrl: "./company-profile-popup.component.html",
  styleUrls: ["./company-profile-popup.component.css"],
})
export class CompanyProfileComponent extends BaseComponent implements OnInit, OnDestroy {
  profileImgUrl = "";
  companyId = 0;
  companyRegId = this.data.companyRegistrationId;
  companyIdForPrint = this.data.companyId;
  imgUrls: string[] = [];
  pdfDownloadsLinkUrls: string[] = [];
  excelDownloadsLinkUrls: string[] = [];
  powerPointDownloadsLinkUrls: string[] = [];
  moviesDownloadsLinkUrls: string[] = [];
  videoLinkUrls: string[] = [];
  companyAddressesInfo!: CommInfo[];

  companyProfile = new CompanyInformation();
  persons: PersonBasicInfo[] = [];
  isLoaded: boolean = false;

  public configForImages: SwiperOptions = {
    effect: "flip",
    grabCursor: true,
    pagination: {
      type: "fraction",
    },
    navigation: true,
    slidesPerGroup: 1,
    modules: [EffectFlip, Pagination, Navigation],
  };

  public configForCardsImages: SwiperOptions = {
    effect: "flip",
    grabCursor: true,
    pagination: true,
    // navigation: true,
    slidesPerGroup: 1,
    modules: [EffectFlip, Pagination, Navigation],
  };

  public configForCards: SwiperOptions = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: false,
    // pagination: {
    //   type: "fraction",
    // },
    navigation: true,
    modules: [Pagination, Navigation],
    slideActiveClass: "my-active-slide",
  };



  constructor(
    private contactService: ContactService,
    @Inject(MAT_DIALOG_DATA) public data: CompanyProfilePopupData,
    public translation: Translations,
    public dialog: MatDialog,
    public print: NgxPrintElementService
  ) {
    super();
  }
  onPrint(id: string) {
    alert("print")
  }

  ngOnInit(): void {
    this.isLoaded = true;


    this.contactService
      .getPersonInfoForCompanyProfileForEventHub(this.data.companyRegistrationId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.persons = data;
      });

    this.contactService
      .getCompanyContactDetails(this.data.companyId, this.data.companyRegistrationTypeId, this.data.memberTypeId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.companyProfile = data;
        this.companyId = data.basicInfo.companyId;
        const addressInfo = data.addressesInfo.filter((x) => x.commTypeId <= 2);
        this.companyAddressesInfo = addressInfo;

        data.basicInfo.resources.forEach((element) => {
          if (
            element.resourceTypeId === ResourceType.enhancedLogo ||
            element.resourceTypeId === ResourceType.profileImage
          ) {
            this.profileImgUrl = element.url.includes("https://") ? element.url : element.linkToUrl;
          } else if (element.resourceTypeId === ResourceType.image) {
            this.imgUrls.push(element.linkToUrl);
          } else if (element.resourceTypeId === ResourceType.pdf) {
            this.pdfDownloadsLinkUrls.push(element.linkToUrl);
          } else if (element.resourceTypeId === ResourceType.excel) {
            this.excelDownloadsLinkUrls.push(element.linkToUrl);
          } else if (element.resourceTypeId === ResourceType.powerpoint) {
            this.powerPointDownloadsLinkUrls.push(element.linkToUrl);
          } else if (element.resourceTypeId === ResourceType.movie) {
            this.moviesDownloadsLinkUrls.push(element.linkToUrl);
          } else if (element.resourceTypeId === ResourceType.videoLink) {
            this.videoLinkUrls.push(element.linkToUrl);
          }
        });
        this.isLoaded = false;
      });
  }

  formatPhoneNumber(phone: Phone): string {
    return `${phone.prefix ? phone.prefix + " " : ""}${phone.areaCode ? phone.areaCode + " " : ""}${phone.number}${
      phone.extension ? phone.extension : ""
    }`;
  }

  formatTollFree(tollFree: TollFree): string {
    return `${tollFree.prefix ? tollFree.prefix + " " : ""}${tollFree.areaCode ? tollFree.areaCode + " " : ""}${
      tollFree.number
    }`;
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.imgUrls = [];
    this.pdfDownloadsLinkUrls = [];
    this.excelDownloadsLinkUrls = [];
    this.powerPointDownloadsLinkUrls = [];
    this.moviesDownloadsLinkUrls = [];
    this.videoLinkUrls = [];
  }
}
