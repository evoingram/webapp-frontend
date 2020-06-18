[![Maintainability](https://api.codeclimate.com/v1/badges/9e220220e7d71d3e13a8/maintainability)](https://codeclimate.com/github/evoingram/webapp-frontend/maintainability)

# Transcript Web App Front End Product Overview (in progress) 

## Project Description

This is the front end for the online port of my company's VB database, which is used for transcript production and workflow management.  The VB database does everything from scheduling to automated shorthand to automated hyperlinking and document formatting, shipping, production, management of company financials, and other business operations.  The back end was designed and created to support a front end that also does such things.  Copyright 2020 Erica Ingram.

## Key Planned Features 

- Live solo project
- Generates 25 to 30 different documents automatically such as price quotes, invoices, cover pages, indexes, and others
- Manages schedule and production workflow
- Auto-imports e-mails from Outlook
- Automatically hyperlinks authority within transcripts via CourtListener API
- Manipulates PDFs to auto-generate bookmarks and create different transcript versions
- Auto-creates and formats Word versions
- Tracks communication and document history of each transcript order
- Manages and plays audio and reporter notes
- Integrated with Office, Acrobat, and WinSCP libraries and several APIs such as CourtListener, Wunderlist, PayPal, OneNote, and others
- More to come; check the Product Vision Document for more info!

## Tech Stack

Front end will be deployed to `Vercel` and built using:

- [React](https://reactjs.org/): ReactJS is an open-source JavaScript library which is used for building user interfaces specifically. for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.
- [Redux](https://redux.js.org/):  predictable state container for JavaScript apps.
- [Styled Components](https://styled-components.com/):  visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [TypeScript](link):  a superset of JavaScript that compiles to clean JavaScript output.
- [Cypress](https://github.com/cypress-io/cypress):  fast, easy and reliable testing for anything that runs in a browser.
- [Axios](https://github.com/axios/axios):  promise-based HTTP client for both browser and node.js.

## Available Scripts 

### `npm start`
   
## Testing

Cypress testing will be completed in a future release.

## Documentation

### [PRODUCT VISION](https://aquoco-my.sharepoint.com/:w:/g/personal/evoingram_aquoco_onmicrosoft_com/ES9-HPl3otdAjjtMrqpWIrkBMTrLyRDvxVEtYGkOMWLDUQ?e=fXTfhK)
### [ADOBE XD WIREFRAME](https://github.com/evoingram/webapp-frontend/blob/master/docs/Dashboard.xd)

### Component Plan

- App
  - MenuBar/top
    - buttons (home, calculator, logout)
      - add inside out underline animation
      - estimate calculator should be modal
    - logo (fix responsive @ small screens)
  - caseBar/left
    - profileInfo
    - caseInfo
  - mainWindow/right
    - caseinfo
      - caseInfo
      - caseActions
    - courtdate
      - commHistory
      - courtdateInfo
      - tStatus
      - files
      - invoice
- chat bot bottom right corner

## Back End Resources
### [BACK END](https://github.com/evoingram/webapp-backend/)
### [DB SCHEMA](https://dbdesigner.page.link/gbEtfTr1XjgwDa2C7)
### [BASE URL](https://transcript-webapp.herokuapp.com/api)
### [BACK END ENDPOINTS](https://github.com/evoingram/webapp-backend/blob/master/docs/endpoints.md)
### [BACK END POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/6401823/SzRxWAvu?version=latest)
- Postman docs contain examples of all get, post, and put endpoint body submissions AND responses.
