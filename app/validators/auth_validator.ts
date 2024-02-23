import vine from "@vinejs/vine";

export const loginValidator = vine.compile(vine.object({
  email: vine.string().email().trim(),
  password: vine.string().trim()
}))

export const signupValidator = vine.compile(vine.object({
  email: vine.string().trim(),
  password: vine.string().trim(),
  username: vine.string().trim()
}))
