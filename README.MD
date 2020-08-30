[![Maintainability](https://api.codeclimate.com/v1/badges/9e220220e7d71d3e13a8/maintainability)](https://codeclimate.com/github/evoingram/webapp-frontend/maintainability)

# Transcript Web App Front End Product Overview (in progress) 

## My Role

This was a solo project.

## Project Description

This is the front end for the online port of my company's VB database, which is used for transcript production and workflow management.  The VB database does everything from scheduling to automated shorthand to automated hyperlinking and document formatting, shipping, production, management of company financials, and other business operations.  The back end was designed and created to support a front end that also does such things.  Copyright 2020 Erica Ingram.

## Key Planned Features 

- Live solo project
- Integrates GTD principles into workflow
- Generates 25 to 30 different documents automatically such as price quotes, invoices, cover pages, indexes, and others
- Manages schedule and production workflow
- Auto-imports electronic communication
- Automatically hyperlinks authority within transcripts via CourtListener API
- Manipulates PDFs to auto-generate bookmarks and create different transcript versions
- Auto-creates and formats Word versions
- Tracks communication and document history of each transcript order
- Manages and plays audio and reporter notes
- Integrated with Office, Acrobat, and WinSCP libraries and several APIs such as CourtListener, PayPal, OneNote, and others
- speech recognition
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
   
## API 

- [CourtListener](http://courtlistener.com/):  assists in automation of authority hyperlinking.
- [Office](https://docs.microsoft.com/en-us/previous-versions/office/office-365-api/):  document creation, formatting, and management.
- [PayPal](https://developer.paypal.com/home/):  payment processing and management.
- [Wunderlist](https://developer.wunderlist.com/):  to-do list management.

## Testing

Cypress testing will be completed in a future release.

## Documentation

### [PRODUCT VISION](https://aquoco-my.sharepoint.com/:w:/g/personal/evoingram_aquoco_onmicrosoft_com/ES9-HPl3otdAjjtMrqpWIrkBMTrLyRDvxVEtYGkOMWLDUQ?e=fXTfhK)   |   [ADOBE XD WIREFRAME](https://github.com/evoingram/webapp-frontend/blob/master/docs/Dashboard.xd)

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

### Speech Recognition

There is also a working speech recognition component of the VB database (planned for a future release with this front end) that I have never used because I need something more robust than PocketSphinx; it will do things at the click of a button like record the audio in the proper format, complete the speech recognition, and auto-feed the engine audio & transcripts to make it more accurate. It formats court transcripts into an engine-readable format. A chunk of it was done using batch files, but comes out of VBA & starts from clicking an Access form button.  What held me back in this process was I need to figure out a way to build a big dictionary against which to use it, and i can't use PocketSphinx for the engine because of the dictionary size need.  Using the smaller version results in having to use too small a dictionary, which makes for a very inaccurate read due to the high level of vocabulary and varying people in any given court situation, generally speaking.  But other than that, the process is solid.

## Back End Resources
### [BACK END](https://github.com/evoingram/webapp-backend/)   |   [DB SCHEMA](https://dbdesigner.page.link/gbEtfTr1XjgwDa2C7)   |   [BASE URL](https://transcript-webapp.herokuapp.com/api)   |   [ENDPOINTS](https://github.com/evoingram/webapp-backend/blob/master/docs/endpoints.md)   |   [CUSTOMER USE CASE DIAGRAM](https://github.com/evoingram/webapp-backend/blob/master/docs/use%20case.jpg)
### [POSTMAN DOCUMENTATION](https://documenter.getpostman.com/view/6401823/SzRxWAvu?version=latest)
- Postman docs contain examples of all get, post, and put endpoint body submissions AND responses.
