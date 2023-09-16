import '../styles/todo-list-item.css'

import { TodoListPropsItem } from '../organelles/todo';

export function TodoListItem(props: TodoListPropsItem) {
  const ICON_LIST_ITEM =
    <svg className='TodoListItem__Icon__El' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='TodoListItem__Icon__El__True' fillRule="evenodd" clipRule="evenodd" d="M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" fill="#FFA033" />
      <circle className='TodoListItem__Icon__El__False' cx="11" cy="11" r="10" stroke="#B7B7B9" strokeWidth="2" />
    </svg>;

  return (
    <div className={props.value.isCheck ? "TodoListItem--active TodoListItem" : "TodoListItem"}>
      <div className='TodoListItem__Icon' onClick={() => props.toggleIsCheckByKey(props.id)}>
        {props.iconTodoListItem ? props.iconTodoListItem : ICON_LIST_ITEM}
      </div>
      <div className='TodoListItem__Text'>
        {props.value.text}
      </div>
    </div>
  )
}
