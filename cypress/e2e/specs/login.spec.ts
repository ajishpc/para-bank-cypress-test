import { Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pages/loginPage";

Given("I login to Para Bank with {string} and {string}", function (username: string, password:string) {
    
    cy.visit("/")
    loginPage.login(username,password)

  });