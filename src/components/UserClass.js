import React from "react";
import { GITHUB_GET_USER } from "../utils/contants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Vi",
        company: "Test",
      },
    };
    console.log("Child constructor");
  }

  async componentDidMount() {
    console.log("Child Did mount");
    const data = await fetch(GITHUB_GET_USER);
    const json = await data.json();
    this.setState({ userInfo: json });

    // this.timer = setInterval(() => {
    //   console.log("class component setInterval");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    console.log("child render");
    console.log(this.state.userInfo);
    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} className="git_img" />
        <div className="card_details">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h2>Company: {company}</h2>
        </div>
      </div>
    );
  }
}

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

export default UserClass;
