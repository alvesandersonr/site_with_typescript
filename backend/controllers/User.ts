import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs'
import { User } from '../database/src/entity/User';

const store = async (request: Request, response: Response) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        }

        request.body.password = bcrypt.hashSync(request.body.password, 10)

        const repo = getRepository(User)
        const created = await repo.save(request.body)

        if (!created) {
            return response.json('USER_NOT_CREATED').status(400)
        }

        response.json('USER_CREATED').status(200)

    } catch (error) {
        console.log(error)
    }
}

export { store }