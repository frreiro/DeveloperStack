import { CreateAwnser } from './../controllers/questionController.js';
import * as answerRepository from "./../repositories/answerRepository.js"

// TODO

const answerService = {
    async create(answerData: CreateAwnser) {
        await answerRepository.create(answerData);
    },
    async get() {
        return await answerRepository.get();
    },
    async getById(questionId: number) {
        return await answerRepository.getById(questionId);
    }


}
export default answerService;