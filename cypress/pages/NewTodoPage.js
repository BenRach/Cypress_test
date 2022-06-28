import TodoPage from "./TodoPage";

export default class NewTodoPage {

    get newTodoInput() {
        return cy.get('[data-testid="todo-item"]')
    }

    submitNewTodo() {
        return cy.get('[data-testid="submit-newTask"]').click();
    }

    // methods
    load = () => {
        cy.visit("https://qacart-todo.herokuapp.com/todo/new");
        return this;
    }

    addTodo = (item) => {
        this.newTodoInput.type(item)
        this.submitNewTodo.click();
        return new TodoPage();
    }

}