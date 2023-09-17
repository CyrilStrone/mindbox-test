import '../styles/todo-list.css'

import { TodoListProps, TodoValueProps } from '../organelles/todo'
import { TodoListItem } from '../atoms/todo-list-item';

export const toggleIsCheckByKey = (id: number, setValue: (value: React.SetStateAction<TodoValueProps[] | null>) => void): void => {
  setValue((prevValue) => {
    if (!prevValue) return prevValue;
    const newValue = [...prevValue];
    if (newValue[id]) {
      newValue[id] = {
        ...newValue[id],
        isCheck: !newValue[id].isCheck,
      };
    }
    return newValue;
  });
}

export function TodoList(props: TodoListProps) {
  return (
    <div className={props.isShow ? "TodoList--show TodoList" : "TodoList--hide TodoList"}>
      {props.value && Array.isArray(props.value) && props.value.length !== 0 ? props.value.map((v: TodoValueProps, i: number) =>
        props.filter == "All" ?
          <TodoListItem id={i} toggleIsCheckByKey={() => toggleIsCheckByKey(i, props.setValue)} value={v} key={i} iconTodoListItem={props.iconTodoListItem} />
          :
          props.filter == "Active" && !v.isCheck ?
            <TodoListItem id={i} toggleIsCheckByKey={() => toggleIsCheckByKey(i, props.setValue)} value={v} key={i} iconTodoListItem={props.iconTodoListItem} />
            :
            props.filter == "Completed" && v.isCheck ?
              <TodoListItem id={i} toggleIsCheckByKey={() => toggleIsCheckByKey(i, props.setValue)} value={v} key={i} iconTodoListItem={props.iconTodoListItem} />
              : null
      )
        :
        <div className='TodoList__NoValue'>
          No Reminders
        </div>
      }
    </div>
  )
}
