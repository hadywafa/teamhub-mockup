export interface HubSettings {
  clientFullName?: string | null;
  clientYear?: string | null;
  association?: AssociationSettings | null;
  payableInfo?: PayableInfo | null;
  mcsc?: McscSettings | null;
  survey?: SurveySettings | null;
  styles?: Styles | null;
  links?: Links | null;
  supportedLanguages?: AppLanguage[] | null;
}

export interface AssociationSettings {
  addsInfo?: AddsInfo | null;
}

export interface AddsInfo {
  billyGrahamLink?: string | null;
  fairfieldLink?: string | null;
  marketplaceLink?: string | null;
}

export interface PayableInfo {
  invoiceLogo?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  phone?: string | null;
  bankInstructions?: BankInstructions | null;
}

export interface BankInstructions {
  bankLogo: string;
  instructionHtml: string;
}

export interface McscSettings {
  clientScheduleBlockSlotLimitation?: KeyValuePair<string, number>[] | null;
  minorLimitation?: KeyValuePair<string, number>[] | null;
  eventTimeOffsetPerMinute?: number | null;
}

export interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

export interface SurveySettings {
  companyDescription?: KeyValuePair<string, number>[] | null;
  searchablePerRegStatusIds?: number[] | null;
  searchableAnswerTypeId?: number | null;
}

export interface Styles {
  title?: string | null;
  showHideBarText?: boolean | null;
  colors?: Colors | null;
  fonts?: Fonts | null;
  logos?: Logos | null;
}

export interface Colors {
  primaryColor?: string | null;
  primaryButtonBgColor?: string | null;
  primaryButtonHoverColor?: string | null;
  primaryLabelTextColor?: string | null;
  secondaryColor?: string | null;
  secondaryButtonBgColor?: string | null;
  secondaryButtonHoverColor?: string | null;
  secondaryLabelTextColor?: string | null;
}

export interface Fonts {
  primaryFontFamily?: string | null;
  primaryFontSize?: number | null;
  secondaryFontFamily?: string | null;
  secondaryFontSize?: number | null;
}

export interface Logos {
  mainLogoUrl?: string | null;
  mainLogoTargetUrl?: string | null;
  headerUrl?: string | null;
  headerTargetUrl?: string | null;
  footerUrl?: string | null;
  footerTargetUrl?: string | null;
  sideBarUrl?: string | null;
  sideBarTargetUrl?: string | null;
}

export interface Links {
  webSiteURL?: string | null;
  teamHubUrl?: string | null;
  teamEventContactUrl?: string | null;
  email?: string | null;

  forgottenLoginIdEndpointUrl?: string | null;
  forgottenPasswordEndpointUrl?: string | null;
}

export interface AppLanguage {
  id: number;
  code: string;
}
