import * as questionRepository from "./../repositories/questionRepository.js"

export async function questionService(question: string) {
    await questionRepository.create(question)
}
export default questionService;