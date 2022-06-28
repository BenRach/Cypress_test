import TodoPage from "./TodoPage"

export default class LoginPage {

    // locators
    get emailInput() {
        return cy.get('[data-testid="email"]')
    }

    get passwordInput() {
        return cy.get('[data-testid="password"]')
    }

    get submitInput() {
        return cy.get('[data-testid="submit"]')
    }

    // methods

    load = () => {
        cy.visit("https://qacart-todo.herokuapp.com");
        return this;
    }
    
    login = (email, password) => {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitInput.click();
        return new TodoPage()
    }
}