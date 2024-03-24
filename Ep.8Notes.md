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