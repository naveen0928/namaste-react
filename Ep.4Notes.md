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