import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import { TodoValueProps, toggleIsCheckByKey } from '@components/todo'

describe('Тестирование todo-list.tsx', () => {
  describe('Тестирование функции toggleIsCheckByKey', () => {
    const setValueMock = vi.fn()
    let todo: TodoValueProps[]

    beforeEach(() => {
      todo = [
        { text: 'Task 1', isCheck: false },
        { text: 'Task 2', isCheck: true },
        { text: 'Task 3', isCheck: false }
      ]
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    describe('Переключение состояния задачи по ключу', () => {
      test('Должно переключить состояние задачи с false на true', () => {
        toggleIsCheckByKey(0, setValueMock)
        setValueMock((prevTodo: TodoValueProps[]) => {
          expect(prevTodo[0].isCheck).toEqual(false)
          return todo
        })
      })

      test('Должно переключить состояние задачи с true на false', () => {
        toggleIsCheckByKey(1, setValueMock)
        setValueMock((prevTodo: TodoValueProps[]) => {
          expect(prevTodo[1].isCheck).toEqual(true)
          return todo
        })
      })
    })

    describe('Обработка несуществующего ключа', () => {
      test('Должно вернуть исходный массив задач, если ключ не существует', () => {
        toggleIsCheckByKey(5, setValueMock)
        setValueMock((prevTodo: TodoValueProps[]) => {
          expect(prevTodo).toEqual(todo)
          return todo
        })
      })
    })

    describe('Обработка входного значения null', () => {
      test('Должно вернуть null, если предыдущее значение null', () => {
        toggleIsCheckByKey(0, setValueMock)
        setValueMock((prevTodo: TodoValueProps[] | null) => {
          expect(prevTodo).toBeNull()
          return null
        })
      })
    })
  })
})
