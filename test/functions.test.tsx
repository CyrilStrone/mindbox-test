import { describe, expect, it, vi } from 'vitest'

import {
  TodoValueProps,
  addValueItem,
  countItemsWithFalse,
  updateValueAllIsCheck,
  updateValueItemIsCheck
} from '@components/todo'

vi.mock('@jenesei-software/jenesei-ui-react', () => ({
  Button: () => 'Button',
  ButtonGroup: () => 'ButtonGroup',
  Stack: () => 'Stack',
  Typography: () => 'Typography'
}))

describe('addValueItem', () => {
  it('должна вернуть то же значение, если newValue пустая', () => {
    const initialValue: TodoValueProps[] = [
      { text: 'Задача 1', isCheck: false }
    ]
    const result = addValueItem('', initialValue)
    expect(result).toEqual(initialValue)
  })

  it('должна добавить новый элемент в список', () => {
    const initialValue: TodoValueProps[] = [
      { text: 'Задача 1', isCheck: false }
    ]
    const result = addValueItem('Новая задача', initialValue)
    expect(result).toEqual([
      { text: 'Задача 1', isCheck: false },
      { text: 'Новая задача', isCheck: false }
    ])
  })

  it('должна создать новый список, если value равно null', () => {
    const result = addValueItem('Новая задача', null)
    expect(result).toEqual([{ text: 'Новая задача', isCheck: false }])
  })
})

describe('countItemsWithFalse', () => {
  it('должна вернуть 0, если value равно null', () => {
    const result = countItemsWithFalse(null)
    expect(result).toBe(0)
  })

  it('должна вернуть количество элементов с isCheck, равным false', () => {
    const value: TodoValueProps[] = [
      { text: 'Задача 1', isCheck: false },
      { text: 'Задача 2', isCheck: true },
      { text: 'Задача 3', isCheck: false }
    ]
    const result = countItemsWithFalse(value)
    expect(result).toBe(2)
  })
})

describe('updateValueAllIsCheck', () => {
  it('должна вернуть null, если value равно null', () => {
    const result = updateValueAllIsCheck(null)
    expect(result).toBeNull()
  })

  it('должна обновить все элементы, установив isCheck в true', () => {
    const value: TodoValueProps[] = [
      { text: 'Задача 1', isCheck: false },
      { text: 'Задача 2', isCheck: false }
    ]
    const result = updateValueAllIsCheck(value)
    expect(result).toEqual([
      { text: 'Задача 1', isCheck: true },
      { text: 'Задача 2', isCheck: true }
    ])
  })
})

describe('updateValueItemIsCheck', () => {
  it('должна вернуть то же значение, если value равно null', () => {
    const result = updateValueItemIsCheck(0, null)
    expect(result).toBeNull()
  })

  it('должна переключить isCheck для указанного id', () => {
    const value: TodoValueProps[] = [
      { text: 'Задача 1', isCheck: false },
      { text: 'Задача 2', isCheck: true }
    ]
    const result = updateValueItemIsCheck(0, value)
    expect(result).toEqual([
      { text: 'Задача 1', isCheck: true },
      { text: 'Задача 2', isCheck: true }
    ])
  })

  it('не должна ничего изменять, если id вне допустимых границ', () => {
    const value: TodoValueProps[] = [{ text: 'Задача 1', isCheck: false }]
    const result = updateValueItemIsCheck(10, value)
    expect(result).toEqual(value)
  })
})
