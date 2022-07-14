import { prisma } from './../config/database.js';
// TODO
import { CreateAwnser } from "../controllers/questionController.js";

export async function create(anwserData: CreateAwnser) {
    await prisma.anwser.create({
        data: anwserData
    })
}

export async function get() {
    return await prisma.questions.findMany({
        include: {
            anwser: true
        }
    });
}

export async function getById(questionsId: number) {
    return await prisma.questions.findMany({
        include: {
            anwser: true
        },
        where: {
            id: questionsId
        }

    });
}