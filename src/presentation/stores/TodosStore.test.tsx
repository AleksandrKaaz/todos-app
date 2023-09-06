import { todosStore } from "./TodosStore";
import { render, screen, fireEvent } from "@testing-library/react";
import  App  from "../../App";

const testTodos = [
    {name: "first", isCompleted: true, show: true},
    {name: "second", isCompleted: false, show: true},
    {name: "another todo", isCompleted: false, show: true},
];

describe('test app', ()=> {
    it('change todo input', ()=>{
        render(<App/>);
        const newTodoNameInput = screen.getByPlaceholderText('type todo name');
        fireEvent.change(newTodoNameInput, {
            target: {value: 'third'}
        })
        expect(todosStore.inputTodoValue).toBe('third');
    });

    it('add todo', ()=>{
        render(<App/>);
        const newTodoNameInput = screen.getByPlaceholderText('type todo name');
        fireEvent.change(newTodoNameInput, {
            target: {value: 'another todo'}
        });
        const addTodoButton = screen.getByText('Добавить');
        expect(addTodoButton).toBeInTheDocument();
        fireEvent.click(screen.getByText('Добавить'));
        todosStore.addTodo();
        expect(todosStore.todoItems[2]).toEqual(testTodos[2]);
    });
});