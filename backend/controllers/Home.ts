import { Request, Response } from 'express'

const index = function(request: Request, response: Response) {
    response.json({data: 'It\'s work'})
}

export { index }