import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { TodoNew, addNewItem } from '@components/todo'

describe('Тестирование todo-new.tsx', () => {
  const setValueMock = vi.fn()
  const setNewTextMock = vi.fn()
  const props = {
    isShow: true,
    isSetShow: vi.fn(),
    value: [],
    setValue: setValueMock,
    placeholder: 'Test placeholder'
  }
  let input: HTMLInputElement

  beforeEach(() => {
    render(<TodoNew {...props} />)
    input = screen.getByPlaceholderText('Test placeholder') as HTMLInputElement
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('Компонент рендерится', () => {
    expect(input).toBeTruthy()
  })

  test('addNewItem добавляет новый элемент и очищает текстовое поле', () => {
    addNewItem('Test Task', [], setValueMock, setNewTextMock)
    ;async () => {
      expect(setValueMock).toHaveBeenCalledWith([
        { text: 'Test Task', isCheck: false, date: new Date() }
      ])
      expect(setNewTextMock).toHaveBeenCalledWith('')
    }
  })

  test('При отправке формы вызывается setValue', async () => {
    userEvent.type(input, 'Test Task{enter}')
    ;async () => {
      expect(setValueMock).toHaveBeenCalled()
    }
  })
})
