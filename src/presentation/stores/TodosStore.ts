import { makeAutoObservable } from "mobx";
import { TodoItem } from "../../domain/entities/TodoItem";
import { BottomMenuButtons } from "../../enums/BottomMenuButtons";

class TodosStore {
    todoItems: TodoItem[] = [
        {name: "first", isCompleted: true, show: true},
        {name: "second", isCompleted: false, show: true},
    ];
    inputTodoValue: string = "";
    bottomNavValue = 0;
    addTodoError = "";
    
    constructor(){
        makeAutoObservable(this)
    }

    changeNavPage = (newVal: number) => {
        this.bottomNavValue = newVal;
    }
    inputTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.inputTodoValue = event.target.value;
    }

    addTodo = () => {
        this.addTodoError = "";

        if(!this.isNewTodoCorrect(this.inputTodoValue)){
            this.addTodoError = "todo is already added or empty";
            return;
        }

        this.todoItems.push({
            name: this.inputTodoValue,
            isCompleted: false,
            show: true
        });
        this.inputTodoValue = "";
        this.bottomNavValue = 0;
    }

    switchComplete = (name: string) => {
        let findedTodo = this.todoItems.find(
            todoItem =>{
                return todoItem.name === name;
            }
        );
        if (findedTodo) {
            findedTodo.isCompleted = !findedTodo.isCompleted;
        }
    }

    clearCompleted = () => {
        this.todoItems = this.todoItems.filter(item=>
            item.isCompleted === false
        );
    }

    changeShowedItems = (buttonType: BottomMenuButtons) => {
        if (buttonType === BottomMenuButtons.All) {
            this.todoItems.forEach(
                item => item.show = true
            );
        }
        if (buttonType === BottomMenuButtons.Active) {
            this.todoItems.forEach(
                item => {
                    if(item.isCompleted){
                        item.show = false
                    }
                    else {item.show = true}
                }
            );
        }
        if (buttonType === BottomMenuButtons.Completed) {
            this.todoItems.forEach(
                item => {
                    if(!item.isCompleted){
                        item.show = false
                    }
                    else{item.show = true}
                }
            );
        }
    }

    isNewTodoCorrect(todoName: string): boolean {
        let findedTodo = this.todoItems.find(item =>
            item.name === todoName
        );
        if(findedTodo !== undefined || todoName === ""){
            return false;
        }
        else{
            return true;
        }
    }

    get itemsLeft(): number {
        let count = 0;
        this.todoItems.forEach(
            item => {
                if(!item.isCompleted)
                count++;
            }
        );
        return count;
    }
}

export const todosStore = new TodosStore();