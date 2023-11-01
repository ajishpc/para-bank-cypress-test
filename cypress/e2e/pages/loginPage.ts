///<reference types="cypress"/>

class LoginPage{

    elements ={
        username:()=>cy.get('[name="username"]'),
        password:()=>cy.get('[name="password"]'),
        logIn:()=>cy.get('[value="Log In"]')
    }

    login(username:string,password:string){
        this.elements.username().should('be.visible').type(username)
        this.elements.password().should('be.visible').type(password)
        this.elements.logIn().click()
    }

}

export default new LoginPage();