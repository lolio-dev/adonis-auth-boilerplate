import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')

// Auth
router
  .group(() => {
    router.post('login', [AuthController, 'login'])
    router.post('signup', [AuthController, 'signup'])
    router.get('/@me', [AuthController, 'get_current_user']).use(middleware.auth())
  })
  .prefix('/auth')

router.get('/', () => {
  return {
    running: true,
    message: 'Welcome to my adonis 6 lucid-vine boilerplate!',
  }
})
