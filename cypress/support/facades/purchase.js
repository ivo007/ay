/*
    Facades are great way of simplifying test files and abstracting DOM manipulation
    behind the scenes.

    Say we want to test order page after the purchase. Since the whole purchase process
    is just a setup phase of that particular test, it makes sense to abstract the
    whole thing into a facade, thus making test file much cleaner and shorter.
    The test could read something like this:

    const productId = 'sweater-eren-7100936'
    const purchaceAction = new PurchaseFacade(productId)
    order1 = purchaseAction.order('S')
    order2 = purchaseAction.order('M')

    Internet examples: https://www.automatetheplanet.com/facade-design-pattern/
 */
class PurchaseFacade {
    constructor(productId) {
        this.productId = productId
    }

    openProductPage() {
        // connect generic Product Page
    }

    openFlyinContainer() {
        // connect to Flyin modal
    }

    order(size) {
        const productPage = this.openProductPage()
        productPage.chooseSize(size)
        productPage.addToBasket()
        
        const flyin = this.openFlyinContainer()

        // would have to deal with login stuff first...
        flyin.checkout()
    }
}
