import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, RenderResult, screen } from "@testing-library/react";

import { TodoList, toggleIsCheckByKey } from '../../src/components/todo/molecules/todo-list';
import { TodoValueProps } from "../../src/components/todo/organelles/todo";

describe("Тестирование todo-list.tsx", () => {
    describe("Тестирование функции toggleIsCheckByKey", () => {
        const setValueMock = vi.fn();
        let todo: TodoValueProps[];

        beforeEach(() => {
            todo = [
                { text: "Task 1", isCheck: false },
                { text: "Task 2", isCheck: true },
                { text: "Task 3", isCheck: false },
            ];
        });

        afterEach(() => {
            vi.clearAllMocks();
        });

        describe("Переключение состояния задачи по ключу", () => {
            test("Должно переключить состояние задачи с false на true", () => {
                toggleIsCheckByKey(0, setValueMock);
                setValueMock((prevTodo: TodoValueProps[]) => {
                    expect(prevTodo[0].isCheck).toEqual(false);
                    return todo;
                });
            });

            test("Должно переключить состояние задачи с true на false", () => {
                toggleIsCheckByKey(1, setValueMock);
                setValueMock((prevTodo: TodoValueProps[]) => {
                    expect(prevTodo[1].isCheck).toEqual(true);
                    return todo;
                });
            });
        });

        describe("Обработка несуществующего ключа", () => {
            test("Должно вернуть исходный массив задач, если ключ не существует", () => {
                toggleIsCheckByKey(5, setValueMock);
                setValueMock((prevTodo: TodoValueProps[]) => {
                    expect(prevTodo).toEqual(todo);
                    return todo;
                });
            });
        });

        describe("Обработка входного значения null", () => {
            test("Должно вернуть null, если предыдущее значение null", () => {
                toggleIsCheckByKey(0, setValueMock);
                setValueMock((prevTodo: TodoValueProps[] | null) => {
                    expect(prevTodo).toBeNull();
                    return null;
                });
            });
        });
    });

    describe('Тестирование компонента TodoList', () => {
        const setValueMock = vi.fn();
        let renderOption: RenderResult;
        const todo = [
            { text: "Task 1", isCheck: false },
            { text: "Task 2", isCheck: true },
            { text: "Task 3", isCheck: false },
        ];

        beforeEach(() => {
            renderOption = render(<TodoList value={todo} setValue={setValueMock} filter="All" isShow={true} />);
        })

        afterEach(() => {
            vi.clearAllMocks();
        });

        test('Компонент рендерится', () => {
            expect(renderOption).toBeTruthy();
        });
        
        describe('Тестирование отображения элементов TodoList', () => {
            test('Должно отображаться 3 элемента списка', () => {
                const listItems = screen.getAllByTestId('TodoListItem');
                expect(listItems.length).toBe(3);
            });

            test("При отсутствии задач должно отображаться 'No Reminders'", () => {
                renderOption.rerender(<TodoList value={[]} setValue={setValueMock} filter="All" isShow={true} />);
                expect(screen.getByText('No Reminders')).toBeTruthy();
            });

            test("Фильтр 'All' отображает все задачи", () => {
                const listItems = screen.getAllByTestId('TodoListItem');
                expect(listItems.length).toBe(3);
            });

            test("Фильтр 'Active' отображает только активные задачи", () => {
                renderOption.rerender(<TodoList value={todo} setValue={setValueMock} filter="Active" isShow={true} />);
                const listItems = screen.getAllByTestId('TodoListItem');
                expect(listItems.length).toBe(2);
            });

            test("Фильтр 'Completed' отображает только завершенные задачи", async () => {
                renderOption.rerender(<TodoList value={todo} setValue={setValueMock} filter="Completed" isShow={true} />);
                const listItems = await screen.getAllByTestId('TodoListItem');
                expect(listItems.length).toBe(1);
            });
        });
    });
});
