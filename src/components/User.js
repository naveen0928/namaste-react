import { useState, useEffect } from "react";

const User = ({ name, location, contact }) => {
  const [count] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("User functional compoment");
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h2>Contact: {contact}</h2>
    </div>
  );
};

export default User;
