// this is main Page Object Modal class that all other POM classes should extend from
class BasePage {
    constructor() {
        // initial settings
    }

    // main method for opening pages, mainly via some click
    open() {}

    buttonClick(selector) {
        cy.get(selector).click()
    }
}

// we should not be exporting defaults but this is the easiest atm
export default BasePage
