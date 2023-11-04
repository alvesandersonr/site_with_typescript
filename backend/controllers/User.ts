import { Request, Response } from 'express'

const store = (request: Request, response: Response) => {
    response.json({
        nome: 'Foo'
    })
}

export { store }