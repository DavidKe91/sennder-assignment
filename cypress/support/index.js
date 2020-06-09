// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// export const visit = (skipWaiting) => {
//     console.log('visit this =', this)

//     if (typeof skipWaiting !== 'boolean') {
//         skipWaiting = false
//     }

//     const waitForInitialLoad = !skipWaiting

//     cy.visit('http://localhost:8080/')
//     console.log('cy.visit /')
//     if (waitForInitialLoad) {
//         console.log('Loaded')
//     }
// }