/// <reference types="cypress" />

import suiteData from '../../fixtures/conversionFunnels'

import CookiesPage from '../../support/pageObjects/cookiesPage'

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

  describe('Via direct link', () => {
    before(() => {
      cy.visit(suiteData.productUrl)

      const cookiePage = new CookiesPage()
      cookiePage.confirm()
  
      // confirm country choice
      cy.get('[data-testid=countrySwitchCurrentCountry]').click()
    })

    it('Should be able to select a size', () => {})
    it('Should see Flyin popup with checkout button', () => {})
  })

  describe('Via page search', () => {
    before(() => {
      cy.visit(suiteData.homeUrl)
        
      const cookiePage = new CookiesPage()
      cookiePage.confirm()
  
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

  describe('Via page category browsing', () => {
    before(() => {
      cy.visit(suiteData.homeUrl)
        
      const cookiePage = new CookiesPage()
      cookiePage.confirm()
  
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
