import { TodoValueProps } from '..'

export const addValueItem = (
  newValue: string,
  value: TodoValueProps[] | null
): TodoValueProps[] | null => {
  if (!newValue) return value
  const newItem = {
    text: newValue,
    isCheck: false
  }
  return [...(value ?? []), newItem]
}
