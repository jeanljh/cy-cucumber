
class TripFinder {
    get h1Header() { return cy.get('h1.trip-finder__query-header') }
    get divDepartMonthActive() { return cy.get('div[class*="departure-date__month--active"]') }
    divDepartYear = year => cy.get(`div[id='${year}']`)
}

export default new TripFinder()