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