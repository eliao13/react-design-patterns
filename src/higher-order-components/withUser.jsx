import { useEffect, useState } from "react";

export default function withUser(Component, userId) {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(`http://dummyjson.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => console.log("error", error));
    }, [userId]);

    return <Component {...props} user={user} />;
  };
}
