import { TodoValueProps } from '..'

export const setAllIsCheckToTrue = (value: TodoValueProps[] | null) => {
  if (!value) return null
  const updatedValue = value.map((item) => ({
    ...item,
    isCheck: true
  }))
  return updatedValue
}
