import { Stack } from '@jenesei-software/jenesei-ui-react'
import { useState } from 'react'

import { Todo, TodoValueProps } from '@components/todo'

function App() {
  const [value, setValue] = useState<TodoValueProps[] | null>(null)

  return (
    <Stack flexDirection="column" w="100%" maxW="680px" gap="20px" p="20px">
      <Todo value={value} setValue={setValue} />
    </Stack>
  )
}

export default App
