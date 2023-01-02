import { Before, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../pages/home.page'
import tripFinder from '../pages//tripFinder.page'

Before(() => {
    cy.visit('')
    cy.setCookie('subscribeFormDisabled', 'true')
    cy.location('href').should('eq', Cypress.config().baseUrl)
})

When('I click search text field', () => {
    homePage.inputSearchMain.should('not.exist')
    homePage.divSearchMain.click()
})

When('I enter {string} and press ENTER key', location => {
    homePage.inputSearchMain.type(`${location}{enter}`)
})

Then('I can see result title contains {string}', (location) => {
    cy.url().should('include', location)
    tripFinder.h1Header.should('contain', location)
})

When('I enter {string}', location => {
    homePage.inputDestination.type(location).should('have.value', location)
})

When('I select {string}', date => {
    homePage.selectDeparture.select(date).should('have.value', date)
})

When('I click Take Me There', () => {
    homePage.formNoValidate.submit()
})

Then('I can see result title contains {string} and {string}', (location, date) => {
    tripFinder.h1Header.should('contain', location).and('contain', date)
})

Then('I can see departure accordion has year {float} and month {string}', (year, month) => {
    tripFinder.divDepartYear(year).should('exist')
    tripFinder.divDepartMonthActive.should('have.text', month).and('be.visible')
})
