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
