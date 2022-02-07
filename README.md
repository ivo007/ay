# Testing About You page with Cypress

## How to run it
```
yarn run cypress open
```
Then click on `conversionFunnels.spec.js` test file.

## Test suite
Test suite consists of one main suite called 'Pre-Chechout Conversion Funnels' and three sub-suites:
* Via (through) direct link
* Via page search
* Via page category browsing

Main functionalities that can be observed in the code:
- suite nesting and usage of hooks
- basic page interaction when first landing on the page,
namely cookie, country and language confirmation.
- test stubs to get a feel how I would approach testing each conversion funnel
- introduced test fixture in separate JSON file
- introduced Page Object Model design pattern and used it to confirm cookies

## Code structure
Code structure is taken from default Cypress project. I removed most of Cy boilerplate files.

In `support/pageObjects` folder I added JS classes that I think should form the base for all further page objects in the project. They should be organised by
their function (e.g. a component). All POMs should extend from `MainPage` and in it there should be methods that are common to all pages, so that other classes are lighter and own only methods that are specific to that one page or component.

I also introduced one facade, or action file, called `purchase.js`. Its purpose is to handle complex actions that repeat often and are executed always in the same order, such as going through a process of selecting and purchasing some product. Facade files should import many page objects. The code sample is of course only a stub of how it could actually look like. Facades become meaningful only when we already have dozens of POMs created. 

I felt bigger need to showcase how I would structure automation suite over focusing on finding proper selectors and asserting correct information in tests. In other words, I chose to focus on architecture over implementation details.

## Challenges
I have not been automating frontend for past 2 years so I am a bit rusty in that field. I was not able to solve 302 redirect from mobile (m.aboutyou.de) to standard page (www.aboutyou.de) so I went with the latter one.

More information / explanations can be read in other files.

This is my first-ever hands-on contact with Cypress. I find it very fun and with huge amount of features that I was missing when I was automating with Selenium like built-in browser and automatic waits, to name just obvious ones :)
