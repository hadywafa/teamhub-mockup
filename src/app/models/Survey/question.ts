import Choices from "./choices";
import SelectedChoices from "./selected-choices";

export default class Question {
  questionId!: number;
  answerTypeId!: number;
  displayText!: string;
  promptText!: string;
  style!: string;
  choices: Choices[] = [];
  selectedChoices: SelectedChoices[] = [];
  height!: number;
  minLength!: number;
  maxLength!: number;
  isRequired!: boolean;
  Width!: number;
  rows!: number;
  cols!: number;
  layout!: string;
  gridInterface!: string;
}
