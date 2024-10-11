import styled from 'styled-components'

export const TodoNewInput = styled.input`
  width: 100%;
  border: none;
  background-color: var(--block-color-1);
  color: var(--font-color-2);
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 100%;
  height: 36px;
  padding-right: 15px;
  color: #333;
  text-align: left;
  background-clip: padding-box;
  border-radius: 10px;
  position: relative;
  height: 100%;
  resize: none;
  overflow: auto;
  transition: height 0.15s ease-out;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--font-color-3);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-2);
    font-style: italic;
  }
`

export const TodoNewForm = styled.form`
  width: 100%;
  height: 100%;
`
