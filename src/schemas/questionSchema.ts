import Joi from "joi";
import { CreateQuestion } from "../controllers/questionController.js";

export const questionSchema = Joi.object<CreateQuestion>({
  question: Joi.string().required()
});
