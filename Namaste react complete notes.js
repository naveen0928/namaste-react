<!-- HOME WORK -->

<!-- What is CDN?    GET SOME KNOWLEDGE ON THIS -->
<!-- Content Delivery networks - This is a website where the React library has been hosted and
     we are just puling react from there into our project -->

<!-- 2. What is CrossOrigin -->

<!-- React comes with the philosopy of writing or maipulating the DOM using Javascript -->

<!-- React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello world from Reactt!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
Second param from above line is generally used to give attributes like {id: "heading"}
React.createElement actually is a JS object but not h1 tag
root.render take the JS object and then put it on DOM to render -->

<!-- React is only writtten in JSX -->

<!-- Library -- React can work individully in a small portion of app as well 
    Framework - It will have lot of things inside -->
	
	
----------------------------------------------------------------------------------------------


/* READ Ep.6Notes.md to get knowledge */

1. What is CDN?
2. Continuous Hashing in parcel?
3. Learn Parcel
4. browserslist
5. Babel
6. Various attributes of various tags
7. Cross site scripting
8. What makes ur react code Readable? - JSX
9. CLoudinary - CDN
10. Optional chaining
11. Can i use a default export along with named export?
12. Reconciliation Algorithm/React Fiber - https://github.com/acdlite/react-fiber-architecture
13. Virtual DOM - Representation of Actual DOM - Normal JS object
14. Diff Algorithm - Finds out the Differences between previous DOM and updated virtual DOM
15. Why React is Fast?
16. Monolith and microservice architecture?
17. Shimmer UI - load fake page until we get actual data from api
18. Episode.7 - Make restaurant card Ui friendly same like swiggy
19. Why do we write super(props)?
20. React lifecycle method diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
21. Single Page Application - React
22. Why can we use async in componentdidupdate() but not in useEffect()?


23. What is Single Responsibility Principle? - Function/Class should have single responsibility or identity
                                             - More Re-usable, maintainable, testable
24. What is Utility Function?
25. Lazy loading, Suspense


26. Styled Components?, sass, scss
27. material UI, bootstrap, chakra UI, ant design

28. Lifting the state up in react?
29. Make Restuarant category 0th index expand/collapsible
30. Props Drilling and Other ways to avoid props drilling
31. Diff between useContect and redux?

32. What are Actions and Reducers?
33. Check Zustand
34. Immer library - Finding diff between older state and updated state and gives us new state(Immutable state)
35. Redux toolkit - RTK query
1. Reportwebvitals.js?
2. <React.strictmode>
3. useParams and useSearchParams
4. URLsearchParams
	
	
----------------------------------------------------------------------------------------------


--- Episode - 1 Notes is in index.html file

--- npx parcel build index.html - PROD build
--- npx parcel index.html - DEV build

--- Costly operation normally when page loads is loading images - Parcel optimises images
--- npx parcel build index.html - to create the prod ready app
        - If we run the above command, it will throw the error
        - To fix that, remove "main": "App.js" in package.json

--- When we run npx parcel index.html, it generates a development build of the project and hosted on http://localhost:1234 and puts it   in dist folder

--- NPM - It is a repository where you have all the packages
        - It is a package manager
        - No where in official website (npmjs.com) you will see NPM is abbrevated as Node Package Manager
        - When you create an app using create-react-app, it will automatically have NPM inside it, No need to configure it manually
        - To confiure NPM, run npm init in terminal and answer the questions

--- NPX - executing a package
        - Example - npx parcel index.html

--- Node modules - containes all the code that we fetch from NPM
                 - kind of DB which containes data that we need

--- Transitive dependencies - If we install a dependency, then that dependency need some more       dependencies from NPM and that some more dependencies need some other dependencies from NPM etc

--- Package.json file - basically the configuration for NPM
                      - Keeps track of what version of package/dependency is installed in project

--- Package.lock.json - Keeps track of exact version of dependency or sub dependencies

--- What is Bundler? -> It packages our app properly so it can be shift to production
                     -> Example - webpack, parcel etc
                     -> when we create an app using create-react-app, behind the scenes it uses webpack


--- There are 2 types of dependencies - 1. Dev dependencies
                                      - 2. Normal dependencies

    1. Dev dependencies - Generally requires in a development phase
    2. Normal dependencies - used in production also

--- ^(caret) - It will update minor version and patch version
             - If version is 2.8.3, then after npm runs it will update to 2.8.4
    ~(tilde) - I will update the major version
             - If version is 2.8.3, then after npm runs it will update to 3.0.0
    Note     - If version 2.8.3 then 2 - major version,
                                     8 - minor version,
                                     3 - patch version

--- Not recommadable to use cdn links to use the react 
        - hitting cdn links using network call is a costly operation
        - React version will be differed in future as well

--- Parcel 
        - It creates - 1. Dev Build
                       2. Local Server
                       3. Automatically refreshing the page called HMR - Hot Module Replacement
                       4. Diff dev and prod bundles
        - Parcel uses File Watching Algorithm - it is written in C++
        - Uses parcel-cache for faster development experience
        - Does Image optimization
        - Minify the files
        - bundles the files
        - Compress files
        - Does consistant hashing - HW
        - Code Splitting
        - Differential bundling - supports older browsers
        - Diagnostics
        - Error Handling
        - Can host app in HTTPS - Ex: npm parcel index.html --https
        - Tree shaking - removes unused code

--- browserslist in package.json
        - If we provide configs in browserslist it will definetly work in those versions and
           broswers
        - It might or might not work in rest of the browsers


---------------------------------------------------------------------------------------------------

--- What is JS? - Code where JS engine understands but JS engine cannot understands JSX because JS engine understands ECMA script
--- ECMA script - Pure JS which JS engine understands

--- Then How come JSX is executed in browser? - Even before the code goes to the JS engine, it is transpiled before it goes to the JS engine and then JS engine will receive the code that JS engine can understand
    - Basically code is transpiled before reacing JS engine
    - Transpile - code is converted into the code that browsers/React can understand and Parcel(Babel) is transpiling it

--- To run our project in dev mode we normally use npx parcel index.html
    - To ignore this everytime we need to write a command in package.json
    - npm run start === npm start
    - npm start will execute the parcel with starting point index.html because we have configured in package.json
    - npm run build !== npm build -- error will display

-- DOM elements - HTML elements in Inspect Elements tab

-- React Elements -- Kind of equivalent to DOM elements
                    - Not equal to HTML element
                    - It is an object
                    - When we render this element into DOM, it is an HTML element
                    - React.createElement => Object => rendered as HTML element

-- JSX - Javascript syntax which is easier to create elements
       - JSX is speperate and React is seperate
       - Not HTML inside JS
       - It is a HTML like syntax
       - End of the Day -- Transpiled to React.createElement()
       - If JSX is written in single line then it is perfectly valid
       - If multiple line, then we need to mandatorily wrap it up with () because babel needs to understand

--- Babel - converts JSX to React.createElement() which browsers understands

-- What is Component?
    - There are 2 types of components
        - Class based components
            - OLD way of writing the code
            - Uses JS classes
        - Functional Components
            - NEW way of writing the code
            - Uses JS functions which returns JSX code or Function which returns React Element

-- What is React Functional Component?
    - Normal JS function which return JSX code

--- What is Component Composition?
    - Combining Two components into one component

--- Cross Site scripting - If an attacker/outsider runs some JS operations in your personal browser
                         - But JSX takes care of this Injection attacks/malicious data or JSX returns sanitizes data
						 
						 
----------------------------------------------------------------------------------------------------------

We will develop Food Order app

/**
 * 
 * 
 * Header
 *    - LOGO
 *    - Nav Items
 * Body
 *    - Search Component
 *    - Restaurant Card Container - will have lot of cards
 *        - Restaurant card
 * Footer
 *    - Copy Right
 *    - Links
 *    - Address
 *    - Contact Information
 * 
 * 
 * 
 */

 --- Props - something which you can pass to the component
           - Just passing an argument to a function
           - React basically takes all props and wrap everything into props and pass it in child component
           - When we have to dynamically pass in some data to a component, you pass in a prop

--- Config driven UI - Our website is driven by configs
                     - Controlling UI using data
                        - Example - Consider swiggy app and in that based on diff locations, offers on restaurants or restaurant list will be displayed


--- Why do we need keys in loops?
    - If we have a container with same level of child components which are having unique ids and if something new child same level component comes in, react will clean the container re-render all the same level child components along with new child treating all child's are same
    - But if we give keys, even if some thing comes in react already knows that prev ids are there and new element has come up with new key, it will only render the newly added element rather than every element
    - Adding keys will add huge optimization while writing the code and performance will improve


--- Why not to use index as key?
    - React itself says not to use index as key
    - We can use but not recommended
	
	
----------------------------------------------------------------------------------------

--- Why React? - makes coding experience fast by writing less code and can build large scalable production ready applications

--- Two types of exports and imports
    - Default - Defaultly we can use only one export for the module - export default Component
              - No need for curly braces while importing - import Component from "path"
    - Named - If we have multiple things to export - export const Component
            - Use curly braces while importing - import { Component } from "path"


--- whenever a state variable updates, React will re-render my component

--- REACT HOOKS
    - Normal JS utility function given by react - Written by Facebook developers
    - useState() - Super powerful state variables in react
                 - maintains the state of the component
    - useEffect() - It will have 2 arguments
                        1. Callback function
                        2. Dependency array
                  - Will be called after render cycle finishes


--- Why React is Fast - Because it will do DOM operations very fast
                     - Because react is doing efficient DOM manipulation by creating a virtual DOM
                     - It has Diff algorithm
                     - makes UI layer and data layer in sink

--- Reconciliation Algorithm
    - Also Known as React Fiber comes in React 16
    - New way of finding the diff and updating the DOM

--- Virtual DOM - Representation of Actual DOM - Normal JS object

--- Diff Algorithm - Finds out the differences between previous DOM and updated virtual DOM


--------------------------------------------------------------------------------------------------

--- Monolithic vs Microservice architecture
    - Monolithic - UI,BE,DB,SMS,Email will be in same project
    - Microservice - UI,BE,DB,SMS,Email will have sepearte projects for seperate services
        - These will be connected by
            - If UI calling BE - domain/api
            - If UI calling SMS - domain/sms

--- There are two types of ways to make api call
    1. pages loads -> api call(suppose,takes 500ms to fetch data) -> render
    2. page loads -> render -> api call -> render 
        - If you think of render twice in approach-2, it is OK because react render cycle is very fast
        - This is best approach because approach-1 will take some time to load the data and in that 500ms page will be kind of frozen

--- fetch() - super power given by browser not JS

--- Conditional Rendering - when page is rendering based on condition

--- Why do we need to create state variables?
    - If we use normal JS variable and try to update it lets say by Onclick there is no way from REACT to track whether this variable is updated or not
    - Even if we assign some value onclicking btn, it will update in console but it will not refresh the page
    - When we use UseState ans setting the state, then REACT will trigger the render process once again
    - Whenever state variable changes, React will re-render the component and all the updated values will be there


--- How can we modify the values of state variable even if it is CONST?
    - Basically whenever we setting the state value REACT automatically call the component again but this time when we invoke this function the state variable is a new variable (or it will create a new instance of state variable) than it was before
    - When we get a new variable on re-rendering the component, state variable will be the new value and not the default value


--- Whenever local state variable changes, then React will re-render/Reconciliation cycle the whole component



------------------------------------------------------------------------------------------------------


--- useEffect - It will have 2 arguments
                 - Callback function
                 - Dependency array
              - It will be called after every render of the component if no dependency array
              - It will be called only after initial render and just once if dependency array is empty
              - It will be only called when the dependency changes when we have something in the dependency array and updating it


--- useState - Never create state variables outside the component
             - Try to call on the top of the component
             - Dont create in IF/ELSE - can create inconsistencies
             - Dont create in for loops, functions

--- React-router-dom gives us access to a hook useRouteError

--- Why we should not use <a /> Anchor tag for routing in react?
    - We should not use because it will refresh the whole page. It will work though

--- React is single page application because it will not reload the whole page but it refreshes

--- There are two tyoes of routing we can have on web apps
    1. Client side routing
        - When we load the application, browser will have all the components in it and when we click on it, it will just replace the content in the component
    2. Server side routing
        - On clicking, it reloads the whole page, make external call, get the data from call and put it on UI

--- <Link> from react-router-dom will be <a> tag in browser console beacuse behind the scenes React-router-dom is keeping track of it

-------------------------------------------------------------------------------------------------------------

--- Functional component - Function that returns JSX
--- Class Component - Class which extends React.component and it has render method that returns JSX

--- React.Component - Given by React and UserClass in inheriting from React

--- Loading class based component means creating a instance of the class
    - Whenever creating a instance of the calls, Constructor is called to receive props and to create state variables
    - First constructor, then render is called
--- loading Functional based component means calling/invoking a function

--- componentDidMount() - Once component mounted onto the DOM, then this is called
                        - DOM - render - API call - Rerender



/*
 - Parent Constructor
 - Parent Render

   <RENDER PHASE>
    - First Child Constructor
    - First Child Render

    - Second Child Constructor
    - Second Child Render

      - Child of child constructor
      - Child of child render

    <DOM UPDATE - IN SINGLE BATCH> -- React Optimises the app here 

    <COMMIT PHASE>
    - First Child Did update
    - Second Child Did update

       - Child of child did mount
  
  - Parent Did Mount
*/



-------------------------------------------------------------------------------


/**
 * 
 * --------------- MOUNTING PHASE ----------------
 * 
 *- constructor (with dummy data)
 * Render (with dummy data)
 *       <HTML Dummy data>
 * 
 * Component Did Update
 *       <API call>
 *       < this.setState> - updates the state variable with API data
 * 
 * --------------- UPDATING PHASE -----------------
 *       render (API Data)
 *       <HTML update> (API Data)
 * 
 * Component Did Update
 * 
 * 
 * 
 * 
 * 
 */

 --- Why do we need ComponentWillUnMount?
    - Lets say we have a Parent component and 2 child components
    - In one of the components if we console a setInternal in componentDidMount with 1 sec and navigate between other components
    - Then, setInterval will run in the console coninuously and it will add the timing it we go to other component and come vack to the actual consoled component
    - This will reduce the performance of the app
	
	
	
----------------------------------------------------------------------------------------------

Problem - Parcel makes all the components into a single JS file and it do its operations
        - But if we have large scale applications, though we have a single bundled JS file, browser will take some time to load that single JS file beacuse it will have big file size
        
Solution - We will make smaller bundles of this files
         - This process is know as Chunking/Code Splitting/Dynamic bundling/Lazy Loading/On Demand loading/Dynamic import

lazy - function gives us by React


--- index.js:1 React Router caught the following error during render Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
    - We got the above error because Grocery takes some time to load the component and put it on UI
    - Meantime, browser tries to find the data from the component and it sees no data present in it 
    - So it showed this error
    - To fix this we will use suspense
	
-----------------------------------------------------------------------------------------------

--- Tailwind css - works with react and other UI frameworks as well
                 - uses postcss
                 - gives u classnames automatically for every css you want to write in app
                 - very light weight - keeps bundle size small
                 - only import the css that is absolutly required by the component though it has many classes
                 - Suppose, if we are using m-4 multiple times in component, it will have only one time in browser

--- postcss is used to understand what is written inside the project and it enables tailwind

-------------------------------------------------------------------------------------------------


--- HOC - function that takes a component, enhances the component and returns a component
        - Normal JS function
        - acts like an enhancer
        - Pure functions - it will not change the code of parent component

--- All the react apps has 2 imp layers
        - UI layer - powered by data layer - JSX
        - Data layer - consists of state, props, local variables

--- Controlled Component - Parent is controlling the child (RestaurantMenu - parent, Restaurant Category - Child)
--- Uncontrolled Component - Child is having the control but not parent (RestaurantCategory - Child)

--- Props Drilling - Lets say we have a parent and 10 childs under it
                   - If we need pass any prop from parent to 10th child or 5th child to 9th child
                   - we need to pass that prop across the above mentioned components even though we dont use it in intermediate components
                   - This is called props drilling
                   - This can be solved by React context


--- React Context - we can avoild props drilling
                  - We can have data globally or small portion of app and anybody can use it (Logged in user data, Theme data)
                  - Only if you feel we can use data in multiple places then we can use this
                  - can create any no of contexts
                  - performant
				  
-------------------------------------------------------------------------------------------------



--- Redux - Redux works in the data layer
          - Offers state management
          - Redux is not mandatory
          - zustand is another library for state management
          - app becomes easy to debug after redux installation

--- Redux store - Big JS object and kept in a central global space
                - If we need to modify data, we cannot do it directly. We need to DISPATCH an ACTION
                - Then, it calls a function and that function modifies the data of redux store
                - This function is known as REDUCER
                - This process is to write the data
                - But to read the data, we will use SELECTOR. This phenomena is called SUBSCRIBING TO THE STORE(basically in sync with store)

--- In older redux, there is no support to mutate the state directly { ...state - we use to do like this && return is mandatory }
    - In redux toolkit, WE HAVE TO MUTATE THE STATE (mandatory) { ...state, return - not needed }
        - Redux in the background will create a create a copy of state and doing what older redux does
        - Redux in the background uses Immer

--- If we want to console in reducer, then we need to use console.log(current(state)) and current should import from redux toolkit

--- RTK should mutate the new state or return a new state

---------------------------------------------------------------------------------------------------------



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


-----------------------------------------------------------------------------------------

--- useRef - Lets you reference a value that is not needed for rendering - Login.js

--- Firebase setup - After successful setting up firebase in portal - npm install -g firebase-tools - run firebase login - it should show your mail id - firebase init - npm run build - To build the project and asking firebase to deploy - firebase deploy - https://netflixgpt-a0d7c.web.app

--- Why console is happening two time in browser? - Because of <React.StrictMode></React.StrictMode> in index.js and it is defaultly given to us bt create-react-app - It logs more than once only in local but not in production - Also, react renders for extra rendering to maintain consistency. So it is logging more than once

--- Early return - returning null or something before it renders which actually breaks the page

--- https://platform.openai.com/ -> under profile -> API keys - npm openai

--- Default behavior of a form is to submit and refreshes the page

--- Memoization - If data is already in the store then we will not make an api call again to fetch, instead use the store data - check useNowPlayingMovies.js - LINE - 9 and useeffect()

Debouncing with 200ms (If some one says) - if diff between 2 key storkes is <200ms - DECLINE API CALL - if diff between 2 key storkes is >200ms - MAKE AN API CALL

youtube search suggestion api - http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query

LRU cache

There are 2 ways to handle live data

web sockets - Two way connection(or Handshake) between server and UI - No regular interval - Initial connections takes time but once once connection is established it will be fast - Example - TRADING APPS, Whats app

API Polling or Long polling - UI sends the request to server and server gives UI the data - Its one directional and server sends the payload after some interval - Example - GMAIL, CRICBUZZ

useMemo - cache the result of calculation between re-renders useRef - lets you reference a value that is not needed for rendering

--------------------------------------------------------------------------------------------------------------------------------


Testing set up
Install react testing library
Install jest
Install babel dependencies
create babel.config.js and added config
By default parcel uses babel, in order to use our own babel, we need to create .parcelrc
jest configuration - npx jest --init
install jsdom - npm install --save-dev jest-environment-jsdom
Install @babel/preset-react - to make JSX understandable
add this line in babel.config - ["@babel/preset-react", { runtime: "automatic" }]
Install @testing-library/jest-dom
"watch-test": "jest --watch" - in package.json to run test cases continuously