import React, { useEffect, useState } from "react";

export default function UserLoader({ userId, children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log("error", error));
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
}
