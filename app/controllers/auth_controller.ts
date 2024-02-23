import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, signupValidator } from '#validators/auth_validator'
import { inject } from '@adonisjs/core'
import UsersService from '#services/users_service'

@inject()
export default class AuthController {
  constructor(protected usersService: UsersService) {}

  async login({ request }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    const token = await User.accessTokens.create(user)

    return token.value!.release()
  }

  async signup({ request }: HttpContext) {
    const payload = await request.validateUsing(signupValidator)

    return this.usersService.createUser(payload)
  }

  async get_current_user({ auth }: HttpContext) {
    return auth.user
  }
}
