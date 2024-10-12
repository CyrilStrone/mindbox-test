import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import {
  TodoValueProps,
  countItemsWithFalse,
  setAllIsCheckToTrue
} from '@components/todo'

describe('Тестирование todo-config.tsx', () => {
  describe('Тестирование функции setAllIsCheckToTrue', () => {
    let todo: TodoValueProps[]

    afterEach(() => {
      vi.clearAllMocks()
    })

    describe('Преобразование массива задач в isCheck: true', () => {
      beforeEach(() => {
        todo = [
          { text: 'Task 1', isCheck: false },
          { text: 'Task 2', isCheck: true }
        ]
      })

      test('Должно установить isCheck в true для всех задач', () => {
        const updatedTodo = setAllIsCheckToTrue(todo)
        expect(updatedTodo).toEqual([
          { text: 'Task 1', isCheck: true },
          { text: 'Task 2', isCheck: true }
        ])
      })
    })

    describe('Обработка входного значения null', () => {
      test('Должно вернуть null, если входное значение null', () => {
        expect(setAllIsCheckToTrue(null)).toBeNull()
      })
    })

    describe('Обработка пустого массива', () => {
      beforeEach(() => {
        todo = []
      })

      test('Должно вернуть пустой массив, если входной массив пуст', () => {
        const updatedTodo = setAllIsCheckToTrue(todo)
        expect(updatedTodo).toEqual([])
      })
    })
  })

  describe('Тестирование функции countItemsWithFalse', () => {
    let todo: TodoValueProps[]

    afterEach(() => {
      vi.clearAllMocks()
    })

    describe('Подсчет задач с isCheck: false', () => {
      beforeEach(() => {
        todo = [
          { text: 'Task 1', isCheck: false },
          { text: 'Task 2', isCheck: true },
          { text: 'Task 3', isCheck: false }
        ]
      })

      test('Должно вернуть количество задач с isCheck установленным в false', () => {
        const count = countItemsWithFalse(todo)
        expect(count).toBe(2)
      })
    })

    describe('Обработка входного значения null', () => {
      test('Должно вернуть 0, если входное значение null', () => {
        expect(countItemsWithFalse(null)).toBe(0)
      })
    })

    describe('Обработка пустого массива', () => {
      beforeEach(() => {
        todo = []
      })

      test('Должно вернуть 0, если входной массив пуст', () => {
        const count = countItemsWithFalse(todo)
        expect(count).toBe(0)
      })
    })
  })
})
