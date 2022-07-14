import { prisma } from "../config/database.js";

export async function create(question: string) {
    await prisma.questions.create({
        data: {
            question
        }
    })
}