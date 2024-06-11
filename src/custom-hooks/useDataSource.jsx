import { useEffect, useState } from "react";

export default function useDataSource(getResourceFunction) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    getResourceFunction().then((data) => setResource(data));
  }, [getResourceFunction]);

  return resource;
}
