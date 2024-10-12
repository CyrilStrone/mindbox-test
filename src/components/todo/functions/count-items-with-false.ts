import { TodoValueProps } from '..'

export const countItemsWithFalse = (value: TodoValueProps[] | null): number => {
  if (!value) return 0
  return value.reduce((accumulator, item) => {
    if (!item.isCheck) {
      return accumulator + 1
    }
    return accumulator
  }, 0)
}
