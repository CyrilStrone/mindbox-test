import '../styles/todo-new.css'

import { SetStateAction, useState } from 'react';

import { TodoNewProps } from '../organelles/todo'

export function TodoNew(props: TodoNewProps) {
  const [newText, setNewText] = useState<string>("");

  const changeShow = () => {
    props.isSetShow(!props.isShow)
  }
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewText(String(e.target.value));
  };
  const addNewItem = () => {
    if (!newText) return
    const newItem = {
      text: newText,
      isCheck: false,
      date: new Date(),
    };

    if (props.value) {
      props.setValue([...props.value, newItem]);
    } else {
      props.setValue([newItem]);
    }
    setNewText("");
  };

  const ICON_NEW =
    <svg className='TodoNew__Icon__El' xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
      <path d="M2 11.939C2 12.3208 2.146 12.6465 2.44922 12.9385L11.209 21.5073C11.4448 21.7544 11.7593 21.8779 12.1187 21.8779C12.8486 21.8779 13.4214 21.3164 13.4214 20.5752C13.4214 20.2158 13.2754 19.8901 13.0283 19.6431L5.1333 11.939L13.0283 4.23486C13.2754 3.97656 13.4214 3.65088 13.4214 3.2915C13.4214 2.56152 12.8486 2 12.1187 2C11.7593 2 11.4448 2.12354 11.209 2.37061L2.44922 10.9395C2.146 11.2314 2.01123 11.5571 2 11.939Z" fill="#007AFF" />
    </svg>;
  return (
    <div className={props.isShow ? "TodoNew--show TodoNew" : "TodoNew--hide TodoNew"}>
      <div className='TodoNew__Icon' onClick={changeShow}>
        {props.iconTodoNew ? props.iconTodoNew : ICON_NEW}
      </div>
      <form onSubmit={e => { e.preventDefault(); addNewItem() }} className='TodoNew__Form'>
        <input
          value={newText}
          onChange={handleInputChange}
          className='TodoNew__Input'
          required
          placeholder={props.placeholder || "What needs to be done?"}
          minLength={3}
        />
        {/* <button type="submit">Save post</button> */}
      </form>
    </div>
  )
}
