import Joi from "joi";
import { readAwnser } from './../controllers/questionController.js';

export const answerSchema = Joi.object<readAwnser>({
  anwser: Joi.string().required(),
});
