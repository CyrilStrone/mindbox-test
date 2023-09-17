import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TodoValueProps } from "../../src/components/todo/organelles/todo";
import {
  countItemsWithFalse,
  setAllIsCheckToTrue,
} from "../../src/components/todo/molecules/todo-config";
import { TodoConfig } from '../../src/components/todo/molecules/todo-config';

describe("Тестирование todo-config.tsx", () => {
  describe("Тестирование функции setAllIsCheckToTrue", () => {
    let todo: TodoValueProps[];

    afterEach(() => {
      vi.clearAllMocks();
    });

    describe("Преобразование массива задач в isCheck: true", () => {
      beforeEach(() => {
        todo = [
          { text: "Task 1", isCheck: false },
          { text: "Task 2", isCheck: true },
        ];
      });

      test("Должно установить isCheck в true для всех задач", () => {
        const updatedTodo = setAllIsCheckToTrue(todo);
        expect(updatedTodo).toEqual([
          { text: "Task 1", isCheck: true },
          { text: "Task 2", isCheck: true },
        ]);
      });
    });

    describe("Обработка входного значения null", () => {
      test("Должно вернуть null, если входное значение null", () => {
        expect(setAllIsCheckToTrue(null)).toBeNull();
      });
    });

    describe("Обработка пустого массива", () => {
      beforeEach(() => {
        todo = [];
      });

      test("Должно вернуть пустой массив, если входной массив пуст", () => {
        const updatedTodo = setAllIsCheckToTrue(todo);
        expect(updatedTodo).toEqual([]);
      });
    });
  });

  describe("Тестирование функции countItemsWithFalse", () => {
    let todo: TodoValueProps[];

    afterEach(() => {
      vi.clearAllMocks();
    });

    describe("Подсчет задач с isCheck: false", () => {
      beforeEach(() => {
        todo = [
          { text: "Task 1", isCheck: false },
          { text: "Task 2", isCheck: true },
          { text: "Task 3", isCheck: false },
        ];
      });

      test("Должно вернуть количество задач с isCheck установленным в false", () => {
        const count = countItemsWithFalse(todo);
        expect(count).toBe(2);
      });
    });

    describe("Обработка входного значения null", () => {
      test("Должно вернуть 0, если входное значение null", () => {
        expect(countItemsWithFalse(null)).toBe(0);
      });
    });

    describe("Обработка пустого массива", () => {
      beforeEach(() => {
        todo = [];
      });

      test("Должно вернуть 0, если входной массив пуст", () => {
        const count = countItemsWithFalse(todo);
        expect(count).toBe(0);
      });
    });
  });

  describe('Тестирование компонента TodoConfig', () => {
    const setValueMock = vi.fn();
    const setFilterMock = vi.fn();
    let renderOption: RenderResult;

    const todo = [
      { text: "Task 1", isCheck: false },
      { text: "Task 2", isCheck: true },
      { text: "Task 3", isCheck: false },
    ];

    beforeEach(() => {
      renderOption = render(<TodoConfig value={todo} setValue={setValueMock} filter="All" setFilter={setFilterMock} />);
    })

    afterEach(() => {
      vi.clearAllMocks()
    });

    test('Компонент рендерится', () => {
      expect(renderOption).toBeTruthy();
  });
  
    describe('Тестирование интерактивных элементов TodoConfig', () => {
      test('При клике "Clear completed" все задачи помечаются как завершенные', async () => {
        await userEvent.click(screen.getByText("Clear completed"));
        expect(setValueMock).toBeCalledWith([
          { text: "Task 1", isCheck: true },
          { text: "Task 2", isCheck: true },
          { text: "Task 3", isCheck: true },
        ]);
      });

      test('Работают фильтры "All", "Active", "Completed"', async () => {
        await userEvent.click(screen.getByText("Active"));
        expect(setFilterMock).toBeCalledWith("Active");
        renderOption.rerender(<TodoConfig value={todo} setValue={setValueMock} filter="Active" setFilter={setFilterMock} />);
        expect(screen.getByText("Active").classList.contains("TodoConfig__ListType__Item--active")).toBeTruthy();

        await userEvent.click(screen.getByText("Completed"));
        expect(setFilterMock).toBeCalledWith("Completed");
        renderOption.rerender(<TodoConfig value={todo} setValue={setValueMock} filter="Completed" setFilter={setFilterMock} />);
        expect(screen.getByText("Completed").classList.contains("TodoConfig__ListType__Item--active")).toBeTruthy();

        await userEvent.click(screen.getByText("All"));
        expect(setFilterMock).toBeCalledWith("All");
        renderOption.rerender(<TodoConfig value={todo} setValue={setValueMock} filter="All" setFilter={setFilterMock} />);
        expect(screen.getByText("All").classList.contains("TodoConfig__ListType__Item--active")).toBeTruthy();
      });
    });
  });
});
