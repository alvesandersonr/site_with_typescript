import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

const store = async (request: Request, response: Response) => {
    try {
        const errors = validationResult(request);
        console.log(errors)
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() })
        }
    } catch (error) {
        console.log(error)
    }
}

export { store }