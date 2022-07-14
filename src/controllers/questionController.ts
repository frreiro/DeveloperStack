import { Request, Response } from "express";
import { Questions, Anwser } from "@prisma/client";
import answerService from "../services/answerService.js";
import questionService from "../services/questionService.js";

// TODO
export type CreateQuestion = Omit<Questions, "id">
export type CreateAwnser = Omit<Anwser, "id">
export type readAwnser = Omit<Anwser, "id" | "questionId">


export async function create(req: Request, res: Response) {
  const { question }: CreateQuestion = req.body;
  await questionService(question);
  res.sendStatus(201)
}

// TODO
export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const { anwser }: CreateAwnser = req.body;
  const questionsId = Number(id)
  await answerService.create({ anwser, questionsId })
  res.sendStatus(201)
}

// TODO
export async function get(req: Request, res: Response) {
  const questions = await answerService.get();
  res.send(questions).status(201)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await answerService.getById(Number(id));
  res.send(question).status(201)
}
