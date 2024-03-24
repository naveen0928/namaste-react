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