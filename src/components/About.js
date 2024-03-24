import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        {/* <User name="Function Name" location="(Function) location" contact="function@test.com" /> */}
        <UserClass
          name="Class Name"
          location="(Class) Gollapudi"
          contact="class@test.com"
        />
        {/* <UserClass
          name="Class Name"
          location="(Class) Gollapudi"
          contact="class@test.com"
        /> */}
      </div>
    );
  }
}

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

export default About;
