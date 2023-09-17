import { TodoConfigProps, TodoValueProps } from '../organelles/todo';

import '../styles/todo-config.css'

export const setAllIsCheckToTrue = (value: TodoValueProps[] | null) => {
  if (!value) return null
  const updatedValue = value.map(item => ({
    ...item,
    isCheck: true,
  }));
  return updatedValue;
}

export const countItemsWithFalse = (value: TodoValueProps[] | null): number => {
  if (!value) return 0
  const count = value.reduce((accumulator, item) => {
    if (!item.isCheck) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);
  return count;
}

export function TodoConfig(props: TodoConfigProps) {
  const changeSetFilter = (filter: "All" | "Active" | "Completed") => {
    if (props.setFilter) props.setFilter(filter);
  }
  return (
    <div className='TodoConfig'>
      <div className='TodoConfig__ListLength'>
        {countItemsWithFalse(props.value)} items left
      </div>
      <div className='TodoConfig__ListType'>
        <div
          onClick={() => changeSetFilter("All")}
          className={props.filter == "All" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}
        >
          All
        </div>
        <div
          onClick={() => changeSetFilter("Active")}
          className={props.filter == "Active" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}
        >
          Active
        </div>
        <div
          onClick={() => changeSetFilter("Completed")}
          className={props.filter == "Completed" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}
        >
          Completed
        </div>
      </div>
      <div
        className='TodoConfig__ListCompleted'
        onClick={() => props.setValue(setAllIsCheckToTrue(props.value))}
      >
        Clear completed
      </div>
    </div>
  )
}

