import { TodoValueProps } from '..'

export const toggleIsCheckByKey = (
  id: number,
  setValue: (value: React.SetStateAction<TodoValueProps[] | null>) => void
): void => {
  setValue((prevValue) => {
    if (!prevValue) return prevValue
    const newValue = [...prevValue]
    if (newValue[id]) {
      newValue[id] = {
        ...newValue[id],
        isCheck: !newValue[id].isCheck
      }
    }
    return newValue
  })
}
