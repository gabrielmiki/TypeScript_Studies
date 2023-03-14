import { Request, Response } from "express"
import { UserService } from "../services/UserServices"

export class LoginController {

    userService: UserService = new UserService()

    login = async (request: Request, response: Response) => {

        const { email, password } = request.body

        try {
            const token = await this.userService.getToken(email, password)

            return response.status(200).json({ token })
        }
        catch (error) {
            return response.status(500).json({ message: "Email ou Password Invalidos!" })
        }
    }
}