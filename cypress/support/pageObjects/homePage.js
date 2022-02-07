import BasePage from "./basePage"

class HomePage extends BasePage {
    constructor() {
        super()
        this.logo = '[data-test-id=TextLogoContainer]'
        this.genderMenu = '[class*="genderSwitch"]'
      }
    
    getMenuItems() {}

    getAllProducts() {}

    changeLanguage() {}

    changeCountry() {}
}

export default CookiesPage
