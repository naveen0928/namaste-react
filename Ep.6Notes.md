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