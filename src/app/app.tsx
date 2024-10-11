import { useState } from 'react'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite'

import { Stack } from '@components/flex'
import { Todo, TodoValueProps } from '@components/todo'

function App() {
  const [value, setValue] = useState<TodoValueProps[] | null>(null)

  return (
    <Stack flexDirection="column" w="100%" maxW="500px" gap="20px">
      <Todo value={value} setValue={setValue} />
      {value && (
        <JsonView
          data={value}
          shouldExpandNode={allExpanded}
          style={defaultStyles}
        />
      )}
    </Stack>
  )
}

export default App
