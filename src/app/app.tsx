import { useState } from 'react'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite'

import { Todo, TodoValueProps } from '../components/todo/organelles/todo'

import './app.css'
import 'react-json-view-lite/dist/index.css';

function App() {
  const [value, setValue] = useState<TodoValueProps[] | null>(null)
  return (
    <div className='App'>
      <Todo value={value} setValue={setValue} />
      {value && <JsonView data={value} shouldExpandNode={allExpanded} style={defaultStyles} />}
    </div>
  )
}

export default App
