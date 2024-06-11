import { useEffect, useState } from "react";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return user;
}
