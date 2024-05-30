import React, { useState, useEffect } from "react";

export default function ResourceLoader({
  resourceUrl,
  resourceName,
  children,
}) {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(resourceUrl)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => console.log("error", error));
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
}
