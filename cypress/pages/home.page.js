class HomePage {

    get divSearchMain() { return cy.get('div.main-nav__search') }
    get inputSearchMain() { return cy.get('div.search-main__input > input') }
    get formNoValidate() { return cy.get('#find-your-destination__content form[novalidate] ') }
    get inputDestination() { return cy.get("input[name='destination']") }
    get selectDeparture() { return cy.get("select[name='departure']") }
}

export default new HomePage()