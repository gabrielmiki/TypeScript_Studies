import { Router } from 'express'
import { LoginController } from './controllers/LoginController'
import { UserController } from './controllers/UserController'
import { verifyAuth } from './midlleware/VerifyAuth'

const userController = new UserController()

export const router = Router()
const loginController = new LoginController()

router.post('/user', userController.createUser)
router.get('/user/:user_id', verifyAuth, userController.getUser)
router.delete('/user', userController.deleteUser)

router.post('/login', loginController.login)