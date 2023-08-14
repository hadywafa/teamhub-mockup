export class UpdateSurFormAnswerDto {
  questionId!: number;
  answerTypeId!: number;
  smallInputAnswer: string | null = null;
  largeInputAnswer: largeAnswerType | null = null;
  selectedChoices: updateChoiceDto[] | null = null;
  choices: updateChoiceDto[] | null = null;
}
export class updateChoiceDto {
  choiceId!: number;
  text!: string;
  isChecked!: boolean;
  userInput: string | null = null;
  rankOrder?: number = 0;
  ordering?: number = 0;
}

export class largeAnswerType {
  fileName: string | null = null;
  mimeType: string = "";
  data: string = "";
}
