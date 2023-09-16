import { TodoConfigProps } from '../organelles/todo';

import '../styles/todo-config.css'

export function TodoConfig(props: TodoConfigProps) {
  const setAllIsCheckToTrue = () => {
    if (props.value) {
      const updatedValue = props.value.map(item => ({
        ...item,
        isCheck: true,
      }));
      props.setValue(updatedValue);
    }
  }
  const countItemsWithFalse = (): number => {
    if (props.value) {
      const count = props.value.reduce((accumulator, item) => {
        if (!item.isCheck) {
          return accumulator + 1;
        }
        return accumulator;
      }, 0);
      return count;
    }
    return 0;
  }
  const changeSetFilter = (filter: "All" | "Active" | "Completed") => {
    props.setFilter(filter);
  }
  return (
    <div className='TodoConfig'>
      <div className='TodoConfig__ListLength'>
        {countItemsWithFalse()} items left
      </div>
      <div className='TodoConfig__ListType'>
        <div onClick={() => changeSetFilter("All")}
          className={props.filter == "All" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}>
          All
        </div>
        <div onClick={() => changeSetFilter("Active")} className={props.filter == "Active" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}>
          Active
        </div>
        <div onClick={() => changeSetFilter("Completed")} className={props.filter == "Completed" ? "TodoConfig__ListType__Item--active TodoConfig__ListType__Item" : "TodoConfig__ListType__Item"}>
          Completed
        </div>
      </div>
      <div className='TodoConfig__ListCompleted' onClick={setAllIsCheckToTrue}>
        Clear completed
      </div>
    </div>
  )
}
