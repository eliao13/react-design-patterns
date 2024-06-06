import React from "react";

export default function ControlledOnboardingFlow({
  children,
  onFinish,
  currentIndex,
  onNext,
}) {
  function goToNext(stepData) {
    onNext(stepData);
  }

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
}
