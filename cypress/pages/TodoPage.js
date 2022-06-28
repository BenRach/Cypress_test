export default class TodoPage {

    get addButton() {
        return cy.get('[data-testid="add"]')
    }

    get firstTodoInput() {
        return cy.get('[data-testid="todo-item"]').first()
    }

    get welcomeMessage() {
        return cy.get('[data-testid="welcome"]')
    }

    get firstTodoCheckbox() {
        return cy.get('[data-testid="complete-task"]').first()
    }

    // methods

    load = () => {
        cy.visit("/todo");
        return this;
    }

    welcomeMessageShouldBeVisible = () => {
        cy.get('[data-testid="welcome"]').should("be.visible");
    }

    clickOnPlusButton = () => {
        this.addButton.click();
        return new TodoPage()
    }

    firstTodoShouldHaveText = (text) => {
        this.firstTodoInput.should('have.text', text)
    }

    checkTodoItem = () => {
        this.firstTodoCheckbox.click();
    }
}