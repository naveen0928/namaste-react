NAMASTE REACT

# Food Ordering App

   - Header - LOGO - Nav Items
   - Body - Search Component - Restaurant Card Container - will have lot of cards - Restaurant card
   - Footer - Copy Right - Links - Address - Contact Information

# Redux toolkit

    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to app
    - Create Slice (Cart slice)
    - Dispatch an action
    - use Selector to read the data

# Types of testing (developer)

- Unit Testing - Testing react components in isolation (one unit of code/component)
- Integration Testing - Testing the integration of components when multiple components are involved
- End to End testing or e2e Testing - Testing react app as soon as user lands and leaves the application
  - Requires diff type of tools

# Testing set up
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

# "watch-test": "jest --watch" - in package.json to run test cases continuously
