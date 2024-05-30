import React, { useState, useEffect } from "react";

export default function DataSource({
  getDataFunc = () => {},
  resourceName,
  children,
}) {
  const [state, setState] = useState(null);

  useEffect(() => {
    getDataFunc()
      .then((data) => {
        setState(data);
      })
      .catch((error) => console.log("error", error));
  }, [getDataFunc]);

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
