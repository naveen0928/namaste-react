--- Why React? - makes coding experience fast by writing less code and can build large scalable production ready applications

--- Two types of exports and imports
    - Default - Defaultly we can use only one export for the module - export default Component
              - No need for curly braces while importing - import Component from "path"
    - Named - If we have multiple things to export - export const Component
            - Use curly braces while importing - import { Component } from "path"


-- whenever a state variable updates, React will re-render my component

--- REACT HOOKS
    - Normal JS utility function given by react - Written by Facebook developers
    - useState() - Super powerful state variables in react
                 - maintains the state of the component
    - useEffect()


-- Why React is Fast - Because it will do DOM operations very fast
                     - Because react is doing efficient DOM manipulation by creating a virtual DOM
                     - It has Diff algorithm
                     - makes UI layer and data layer in sink

--- Reconciliation Algorithm
    - Also Known as React Fiber comes in React 16
    - New way of finding the diff and updating the DOM

--- Virtual DOM - Representation of Actual DOM - Normal JS object

--- Diff Algorithm - Finds out the Differences between previous DOM and updated virtual DOM

