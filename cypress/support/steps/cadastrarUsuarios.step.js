import {Given,When,Then} from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import cadastroPage from '../pages/cadastrarUsuarios.page';

const cadastro = new cadastroPage()

const nome = faker.person.fullName()
const email = faker.internet.email()

Given('Eu acesso o sistema', () => {
   cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('Informo um novo nome de usuario e email valido', () => {
    cadastro.elements.btnNovo()
    cadastro.enterUsername(nome)
    cadastro.enterEmail(email)
    cadastro.clickSubmit()
})
Then('O usuário é registrado', () => {
    cadastro.elements.successTxt()
})

When('Informo um nome e email ja cadastrado', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cadastro.elements.btnNovo()
    cadastro.enterUsername(nome)
    cadastro.enterEmail('grasy.mst@gmai.com')
    cadastro.clickSubmit()
    
})
Then('Uma mensagem de erro "Email já cadastrado" é exibida', () => {
    cadastro.elements.emailDuplicado()
})

When('Informo somente o email', () => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cadastro.elements.btnNovo()
    cadastro.enterEmail(email)
    cadastro.clickSubmit()
})
Then('Recebo mensagem de erro', () => {
    cadastro.elements.errorTxt()
})

When('Informo um novo nome de usuario e email invalido',() => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cadastro.elements.btnNovo()
    cadastro.enterUsername(nome)
    cadastro.enterEmail('@teste.com')

})

Then('Recebo menssagem de formato de email invalido', () => {
   cadastro.clickSubmit()
   cadastro.elements.errorTxt() 
})


