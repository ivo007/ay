/// <reference types="cypress" />

const suiteData = require('../../fixtures/conversionFunnels')

context('Pre-Chechout Conversion Funnels', () => {

  // FIXME: was not able to get around redirects so I went with www :/
  // cy.viewport('iphone-x')
  // cy.request({
  //   url: url,
  //   followRedirect: false, // turn off following redirects
  // }).then((resp) => {
  //   // redirect status code is 302
  //   expect(resp.status).to.eq(302)
  //   expect(resp.redirectedToUrl).to.eq('https://www.aboutyou.de/')
  // })

  // clear scenario test data
  beforeEach(() => {
    
  })

  it('TEST', () => {
    console.log("===> ", suiteData.productUrl)
  })

  describe.skip('Via direct link', () => {
    before(() => {
      const url = 'https://en.aboutyou.de/p/hoermanseder-x-about-you/between-season-jacket-cassia-7059943'
  
      cy.visit(url)
        
      // accept cookies
      cy.get('#onetrust-accept-btn-handler').click()
  
      // confirm country choice
      cy.get('[data-testid=countrySwitchCurrentCountry]').click()
    })

    it('Should be able to select a size', () => {})
    it('Should see Flyin popup with checkout button', () => {})
  })

  describe.skip('Via page search', () => {
    before(() => {
      const url = 'https://www.aboutyou.de/'
  
      cy.visit(url)
        
      // accept cookies
      cy.get('#onetrust-accept-btn-handler').click()
  
      // confirm country choice
      cy.get('[data-testid=countrySwitchCurrentCountry]').click()
  
      // confirm language switch  
      cy.get('[data-testid=languageSwitchTargetLanguage]').click()
    })

    it('Search input field should be visible after clicking search icon', () => {})
    it('Search dropdown menu should be visible after a search', () => {})
    it('Product name should be the same as on the search result menu', () => {})
    it('Should be able to select a size', () => {})
    it('Should see Flyin popup with checkout button', () => {})
  })

  describe.skip('Via page category browsing', () => {
    before(() => {
      const url = 'https://www.aboutyou.de/'
  
      cy.visit(url)
        
      // accept cookies
      cy.get('#onetrust-accept-btn-handler').click()
  
      // confirm country choice
      cy.get('[data-testid=countrySwitchCurrentCountry]').click()
  
      // confirm language switch  
      cy.get('[data-testid=languageSwitchTargetLanguage]').click()
    })

    // Clothing => Jackets
    it('Should be able to select a product category from top menu', () => {})

    // Winter Jackets
    it('Should be able to select a subcategory from side menu', () => {})
    it('Should be able to select a size', () => {})
    it('Should see Flyin popup with checkout button', () => {})
  })
})
