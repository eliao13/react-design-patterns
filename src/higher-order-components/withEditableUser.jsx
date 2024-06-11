import { useEffect, useState } from "react";

export default function withEditableUser(Component, userId) {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setOriginalUser(data);
          setUser(data);
        })
        .catch((error) => console.log("error", error));
    }, [userId]);

    function onChangeUser(changes) {
      setUser({ ...user, ...changes });
    }

    function onResetUser() {
      setUser(originalUser);
    }

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onResetUser={onResetUser}
      />
    );
  };
}
