import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyProfileComponent } from "./components/company-profile-popup/company-profile-popup.component";
import { MaterialModule } from "./shared/material.module";
import { from, pluck } from "rxjs";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { Translations } from "./services/translation-service/translations.service";
import { LoaderComponent } from "./components/loader/loader.component";
import { SurveySummaryPopupComponent } from "./components/survey-summary-popup/survey-summary-popup.component";
import { register } from "swiper/element/bundle";
import { SwiperDirective } from "./shared/swiper-directive.directive";

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return from(import(`../assets/i18n/${lang}`)).pipe(pluck("default"));
  }
}
register();
@NgModule({
  declarations: [AppComponent, CompanyProfileComponent, LoaderComponent, SurveySummaryPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader,
      },
    }),
    SwiperDirective,
  ],
  exports: [SurveySummaryPopupComponent],
  providers: [Translations],
  bootstrap: [AppComponent],
})
export class AppModule {}
