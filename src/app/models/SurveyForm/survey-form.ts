export interface SurveyFormModel {
  surveyName: string;
  instanceId: number;
  questions: SurveyQuestion[];
  errorMessages: ErrorMessage[];
}
export interface ErrorMessage {
  id: number;
  shortCode: string;
  message: string;
  localizedMessage: string | null;
}

export interface SurveyQuestion {
  questionId: number;
  instanceId: number;
  groupQuestionId: number;
  promptText: string;
  shortPromptText: string;
  displayText: string;
  tipText: string;
  correctAnswer: string;
  answerTypeId: number;
  settings: SurQuestionSettingsModel;
  styles: SurQuestionStyleModel;
  answer: SurFormAnswerModel;
  childrenQuestions: SurveyQuestion[];
}
export interface SurQuestionSettingsModel {
  minLength: number;
  maxLength: number;
  isRequired: boolean;
  maxRank: number;
  minRank: number;
  heightOrdering: number;
  minOrdering: number;
  allowedExtensions: string[] | null;
  maxFileSize: number | null;
  isDisplayedOnline: boolean | null;
  isSearchableOnline: boolean | null;
}
export interface SurQuestionStyleModel {
  height: string;
  width: string;
  rows: string;
  cols: string;
  layout: string;
  gridInterface: string;
}
export interface SurFormAnswerModel {
  questionId: number;
  answerTypeId: number;
  instanceId: number;
  answerTextType: SurFormSmallAnswerTextType | null;
  answerLargeType: SurFormLargeAnswerType | null;
  answerChoiceType: SurFormChoiceAnswerType | null;
}
export interface SurFormSmallAnswerTextType {
  answerText: string;
}
export interface SurFormLargeAnswerType {
  mimeType: string;
  data: string;
  fileName: string;
}
export interface SurFormChoiceAnswerType {
  questionId: number;
  instanceId: number;
  choices: Choice[];
  selectedChoices: Choice[] | null;
}
export class Choice {
  parentChoiceId!: number;
  questionId!: number;
  choiceId!: number;
  text!: string;
  isSelectable!: boolean;
  isUserInput!: boolean;
  userInput!: string;
  posX!: number;
  posY!: number;
  rankOrder!: number;
  ordering!: number;
  childrenChoices!: Choice[];
}
