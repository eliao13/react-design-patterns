import { useEffect, useState } from "react";

export default function useResource(resourceUrl) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    fetch(resourceUrl)
      .then((response) => response.json())
      .then((data) => setResource(data));
  }, [resourceUrl]);

  return resource;
}
