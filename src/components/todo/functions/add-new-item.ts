import { TodoValueProps } from '..'

export const addNewItem = (
  newText: string,
  value: TodoValueProps[] | null,
  setValue: React.Dispatch<React.SetStateAction<TodoValueProps[] | null>>
) => {
  if (!newText) return
  const newItem = {
    text: newText,
    isCheck: false,
    date: new Date()
  }
  if (value) {
    setValue([...value, newItem])
  } else {
    setValue([newItem])
  }
}
