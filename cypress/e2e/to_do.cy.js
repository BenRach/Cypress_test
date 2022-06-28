/// <reference types="Cypress" />

import LoginPage from '../pages/LoginPage'

describe("todo testcase", () => {

    it("Should be able to create a todo", () => {

        new LoginPage()
        .load()
        .login("hatem@example.com", "123456")
        .welcomeMessageShouldBeVisible()
        // .clickOnPlusButton()
        // .addTodo("Learn Cypress")
        // .firstTodoShouldHaveText("Learn Cypress")

    });
    it("should be able to mark a todo as completed", () => {

        new LoginPage()
          .load()
          .login("hatem@example.com", "123456")
          .welcomeMessageShouldBeVisible()
        //   .clickOnPlusButton()
        //   .addTodo("Learn Cypress")
        //   .firstTodoShouldHaveText("Learn Cypress")
        //   .checkTodoItem()
    });
});