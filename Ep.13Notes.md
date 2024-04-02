--- Developer can do 2 tyoes of testing
    1. Manual Testing
    2. Writing test cases which tests or app automatically

--- Manual Testing - Testing whatever developed

--- React testing library is built on top of DOM testing library
    - uses JEST Behind the scenes

--- Testing set up
   - Install react testing library
   - Install jest
   - Install babel dependencies
   - create babel.config.js and added config
   - By default parcel uses babel, in order to use our own babel, we need to create .parcelrc
   - jest configuration - npx jest --init
   - install jsdom - npm install --save-dev jest-environment-jsdom
   - Install @babel/preset-react - to make JSX understandable
   - add this line in babel.config - ["@babel/preset-react", { runtime: "automatic" }]
   - Install @testing-library/jest-dom
   - Install npm i @types/jest --save-dev - For jest intellisense vscode

--- To run test cases, npm run test

--- jsdom - When we run test cases, it will not use browser
          - We need to have something to run test cases, which we will be jsdom (browser like)

--- __ -> dunder - we use it as reserved word

--- it and test are both same inside describe