# Weather Forecast Page for manage Cities and forecast

## Prerequisites

  - A Node version of at least 16 is required to create a React App.
  - Npm is a package manager. It is automatically included in your Node installation. You should have at least npm version 8.

## How to run the project


- Install dependencies with `npm install`
- you can edit the package.json scripts if you wanna change the ports of the server or the web portal

###  Stack of technologies used
- This project was bootstrapped with **Create React App**, using the **Redux** and **Redux Toolkit TS** template.
- **Tailwind CSS** as a stylesheet provider, for his fast develop way

### FHS

```
src
├── App.css
├── App.tsx
├── app
│   ├── hooks.ts  (hooks with the types of the app)
│   ├── store.ts  (store of the app)
│   └── types     (types used all over the app)
├── assets        (graphic content used in the app)
├── components    (components saved in atom design pattern)
│   ├── atoms
│   ├── molecules
│   └── organisms
├── features       (slices of the store)
│   ├── cities     (slice of cities)
│   └── weathers   (slice of the forecast from cities)
├── index.css
├── index.tsx
├── pages           (navigation pages of the app)
├── router          (app router handler)
├── services        (api services definitions)
└── tools           (useful tools for the app)
```