import BasePage from "./basePage"

class CookiesPage extends BasePage {
    constructor() {
        super()
        this.selector = '#onetrust-accept-btn-handler'
      }
    
    confirm() {
        this.buttonClick(this.selector)
    }
}

export default CookiesPage
