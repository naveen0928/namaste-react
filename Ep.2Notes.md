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

