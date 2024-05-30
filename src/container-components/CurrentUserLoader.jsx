import React, { useEffect, useState } from "react";

export default function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://dummyjson.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log("error", error));
  }, []);

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
