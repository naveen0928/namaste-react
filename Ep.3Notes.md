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