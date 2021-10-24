export const Validation = {
  usernameRules: [
    valid => !!valid || 'Поле не заполнено',
    valid => (valid && valid.length <= 10) || 'Логин не должен превышать 12 символов'
  ],
  passwordRules: [
    valid => !!valid || 'Поле не заполнено',
    valid => /(?=.*[A-Z])(?=.*[!@#$%])/.test(valid) || 'Пароль должен быть валидным'
  ]
}
