import { useEffect, useState } from "react";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function withEditableResource(
  Component,
  resourcePath,
  resourceName
) {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(resourcePath)
        .then((response) => response.json())
        .then((data) => {
          setOriginalData(data);
          setData(data);
        })
        .catch((error) => console.log("error", error));
    }, [resourcePath]);

    function onChangeUser(changes) {
      setData({ ...data, ...changes });
    }

    function onResetUser() {
      setData(originalData);
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChangeUser,
      [`onReset${capitalize(resourceName)}`]: onResetUser,
    };

    return <Component {...props} {...resourceProps} />;
  };
}
