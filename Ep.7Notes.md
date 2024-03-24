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