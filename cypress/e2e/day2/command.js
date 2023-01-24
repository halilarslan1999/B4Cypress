/// <reference types = "cypress"/>

//visit
cy.visit('open url')
cy.visit('url', {timeout:5000})

//assert- should is a condition

cy.url().should('include',path)

//finding element

cy.get(loc).click() // loc is reference
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative scenario
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get(loc).should('have.text','Table of Contents')
cy.get('input').should('have.value', 'James')

//parent to child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click()
cy.get(loc).next().click()
cy.get(loc).nextAll().click()

cy.get(loc).next().click() //if you don't use the multiple true it will throw an exception
cy.go('back')
cy.get(loc).nextAll().click({multiple:true}) //web table like "t-body" click each of one by one

cy.get(loc).check('top')
cy.get(loc).click('button')
cy.get(loc).click('topleft')

// hover  handling

cy.get(loc).trigger('mousehover').click
cy.get(loc).trigger('mouseup')
cy.get(loc).trigger('mousedown').click

// login
cy.get('#username').clear().type('username')