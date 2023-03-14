import { Request, Response } from 'express'
import { UserService } from '../services/UserServices'

export class UserController {
    userService: UserService

    constructor(userService = new UserService()) {
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {

        const user = request.body

        if ((!user.name) || (!user.email) || (!user.password)) {
            return response.status(400).json({ message: 'Bad Request! Todos os campos são Obrigatórios!' })
        }

        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({ message: 'Usuário Criado' })
    }

    getUser = async (request: Request, response: Response) => {

        const { user_id } = request.params
        const user = await this.userService.getUser(user_id)
        return response.status(200).json( {
            user_id: user?.id_user,
            name: user?.name,
            email: user?.email
        } )
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body
        console.log('Usuario deletado', user)
        return response.status(200).json({ message: 'Usuário Deletado' })
    }
}