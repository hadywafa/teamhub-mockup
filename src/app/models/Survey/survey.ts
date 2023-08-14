import LargeAnswers from "./large-answers";
import Question from "./question";
export default class Survey {
  answer!: string;
  question: Question = new Question();
  large: LargeAnswers = new LargeAnswers();
  surveyName!: string;
}
