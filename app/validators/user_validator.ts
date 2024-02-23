import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    username: vine.string().trim(),
    email: vine.string().email(),
    password: vine.string()
  })
)
