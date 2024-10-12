import { TodoValueProps } from '..'

export const updateValueItemIsCheck = (
  id: number,
  value: TodoValueProps[] | null
): TodoValueProps[] | null => {
  if (!value) return value
  const newValue = [...value]
  if (newValue[id]) {
    newValue[id] = {
      ...newValue[id],
      isCheck: !newValue[id].isCheck
    }
  }
  return newValue
}
