import { SetStateAction, useState } from 'react'

import { Stack } from '@components/flex'
import { Icon } from '@components/icon'

import { TodoNewForm, TodoNewInput, TodoNewProps, addNewItem } from '..'

export function TodoNew(props: TodoNewProps) {
  const [newText, setNewText] = useState<string>('')
  const changeShow = () => {
    props.isSetShow?.(!props.isShow)
  }
  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setNewText(String(e.target.value))
  }

  return (
    <Stack
      h="40px"
      gap="0px"
      w="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Icon
        onClick={changeShow}
        name="New"
        size="medium"
        turn={props.isShow ? 270 : 90}
      />
      <TodoNewForm
        onSubmit={(e) => {
          e.preventDefault()
          addNewItem(newText, props.value, props.setValue, setNewText)
        }}
        className="TodoNew__Form"
      >
        <TodoNewInput
          value={newText}
          onChange={handleInputChange}
          className="TodoNew__Input"
          required
          placeholder={props.placeholder || 'What needs to be done?'}
          minLength={3}
        />
      </TodoNewForm>
    </Stack>
  )
}
