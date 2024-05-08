class cadastrarUsuariosPage {

    elements = {
        btnNovo       : () => cy.get('.sc-gEvEer.fGGZSe').click(),
        usernameInput : () => cy.get('input[name="name"]'),      
        emailInput    : () => cy.get('input[name="email"]'),    
        loginBtn :      () => cy.get('.sc-kpDqfm.dGvNqp'),
        successTxt :    () => cy.get('.go3958317564'),
        errorTxt :      () => cy.get('.sc-cPiKLX.feFrSQ'),
        emailDuplicado : () => cy.get('.sc-dCFHLb.lmTxRO')
    }

    enterUsername(username)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }
 
    enterEmail(email)
    {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }
   
    clickSubmit() {
        this.elements.loginBtn().click();
    }
}

export default cadastrarUsuariosPage;